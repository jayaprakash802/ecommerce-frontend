import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderPage.css";

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const userId = sessionStorage.getItem("userId"); // Get userId from session

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/orders/user/${userId}`);
            console.log(response.data);
            setOrders(response.data);
            console.log(orders.length);
        } catch (error) {
            console.error("Error fetching orders:", error);
            alert("Failed to fetch orders. Please try again.");
        }
    };

    return (
        <div className="order-page">
            <h1>My Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <div className="order-list">
                    {orders.map((order) => (
                        <div key={order.id} className="order-card">
                            <h2>Order ID: {order.id}</h2>
                            <p>Total Amount: ₹{order.totalAmount.toFixed(2)}</p>
                            <p>Status: {order.status}</p>
                            <h3>Items:</h3>
                            <ul>
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        {item.productId} - {item.quantity} pcs - ₹{item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderPage;
