import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./CheckOut.css";
import { verify } from "crypto";

const Checkout = () => {
    const location = useLocation();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        pinCode: "",
        phone: "",
    });
    // const [orderId, setOrderId] = useState("");
    // const [paymentLink, setPaymentLink] = useState("");
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);

    // Load Razorpay script dynamically
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setRazorpayLoaded(true);
        document.body.appendChild(script);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handleProceedToPay = async () => {
        if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || !shippingInfo.state || !shippingInfo.pinCode || !shippingInfo.phone) {
            alert("Please fill in all the shipping details.");
            return;
        }
        if (!razorpayLoaded) {
            alert("Razorpay SDK is not loaded. Please check your internet connection.");
            return;
        }

        try {
            const proceedToPayData = {
                userId: sessionStorage.getItem("userId"),
                totalAmount: totalPrice,
                items: cartItems,
            };

            const response = await axios.post("http://localhost:8084/payment/create-razor-order-id", proceedToPayData);
            if (response.data.orderId && response.data.paymentLink) {
                // setOrderId(response.data.orderId);
                // setPaymentLink(response.data.paymentLink);
                initiatePayment(response.data.orderId);
            } else {
                alert("Failed to get order details from the backend.");
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Payment initiation failed. Please try again.");
        }
    };

    async function initiatePayment(orderId) {
        const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_defaultKey";

        try {
            const razorpay = new window.Razorpay({
              key: razorpayKey,
              amount: totalPrice * 100,
              currency: "INR",
              name: "FlickCart",
              description: "Test Transaction",
              order_id: orderId,
              handler: (response) => {
                    console.log("Razorpay Response:", response);
                    verifyPayment(response);
              },
              prefill: {
                  name: "Admin",
                  email: "admin@flickcart.com",
                  contact: "9182201970"
              },
              theme: {
                  color: "#3399cc"
              }
            });

            razorpay.open();
        } catch (error) {
            console.error("Razorpay Error:", error);
        }
    }

    async function verifyPayment (response) {
        try {
            const verifyPaymentData = {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
            };

            const orderData = {
                userId: sessionStorage.getItem("userId"),
                items: cartItems,
                totalPrice: totalPrice,
                status: "CONFIRMED",
                shippingInfo: `${shippingInfo.fullName}, ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.phone}`,
                razorpay_payment_id: response.razorpay_payment_id
            };

            const verifyResponse = await axios.post("http://localhost:8084/payment/verify", verifyPaymentData);
            console.log("Verify Response:", verifyResponse);
            if (verifyResponse.data === "Payment verified successfully!") {
                console.log("inside")
                const orderCreateResponse = await axios.post("http://localhost:8081/order/create", orderData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log("Order Create Response:", orderCreateResponse);
                alert("Payment successful. Your order is confirmed.");
                sessionStorage.removeItem("cartItems");
                window.location.href = "/orders";
            } else {
                alert("Payment verification failed. Please try again.");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Payment verification failed. Please try again.");
        }
    }


    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            {/* Order Summary */}
            <div className="order-summary">
                <h2>Order Summary</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.productId}>
                            {item.productName} - Quantity: {item.quantity} - Price: ${item.price}
                        </li>
                    ))}
                </ul>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>

            {/* Shipping Information */}
            <div className="shipping-details">
                <h2>Shipping Information</h2>
                <form>
                    <input type="text" name="fullName" placeholder="Full Name" value={shippingInfo.fullName} onChange={handleInputChange} required />
                    <input type="text" name="address" placeholder="Address" value={shippingInfo.address} onChange={handleInputChange} required />
                    <input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleInputChange} required />
                    <input type="text" name="state" placeholder="State" value={shippingInfo.state} onChange={handleInputChange} required />
                    <input type="text" name="pinCode" placeholder="Pin Code" value={shippingInfo.pinCode} onChange={handleInputChange} required />
                    <input type="text" name="phone" placeholder="Phone Number" value={shippingInfo.phone} onChange={handleInputChange} required />

                    <button type="button" onClick={handleProceedToPay} disabled={!razorpayLoaded}>
                        {razorpayLoaded ? "Proceed to Pay" : "Loading Payment..."}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
