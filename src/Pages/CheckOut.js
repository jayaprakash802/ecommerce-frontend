import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const { productId, product } = location.state || {};

    if (!product) {
        return <div>No product selected for checkout!</div>;
    }

    const handlePlaceOrder = () => {
        console.log(`Order placed for Product ID: ${productId}`);
        alert("Order placed successfully!");
        // Add your payment and order confirmation logic here
    };

    return (
        <div>
            <h1>Checkout</h1>
            <h2>{product.name}</h2>
            <img
                src={"C:\Users\jayap\ecommerce-frontend\Images\iphone16.png"}
                alt={product.name}
            />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;
