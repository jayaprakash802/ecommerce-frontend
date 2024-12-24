import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CartPage.css";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = sessionStorage.getItem("userId");

    // Fetch cart items from the API
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8083/cart/${userId}/items`);
                setCartItems(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching cart items:", err);
                setError("Failed to load cart items. Please try again later.");
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [userId]);

    // Remove item from the cart
    const removeItem = async (productId) => {
        try {
            await axios.delete(`http://localhost:8083/cart/${userId}/remove`, {
                params: { productId },
            });
            setCartItems((prevItems) =>
                prevItems.filter((item) => item.productId !== productId)
            );
        } catch (err) {
            console.error("Error removing item from cart:", err);
            alert("Failed to remove the item. Please try again.");
        }
    };

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (loading) {
        return <p>Loading cart items...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.productId} className="cart-item">
                                <img
                                    src={
                                        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1"
                                    }
                                    alt={`Product ${item.productName}`}
                                />
                                <div className="item-details">
                                    <h2>{item.productName}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                    <button
                                        className="remove-button"
                                        onClick={() => removeItem(item.productId)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
