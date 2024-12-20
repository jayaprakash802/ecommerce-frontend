import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
    // Initial cart state (you can replace this with data from a global state or API)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 999,
            quantity: 1,
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-select-202309-6-7inch?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1693594112678",
        },
        {
            id: 2,
            name: "MacBook Air M2",
            price: 1199,
            quantity: 1,
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-m2-202306-13in-spacegray?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1685550915934",
        },
    ]);

    // Update item quantity
    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    };

    // Remove item from the cart
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>Price: ${item.price}</p>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(
                                                    item.id,
                                                    parseInt(e.target.value, 10)
                                                )
                                            }
                                        />
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="remove-button"
                                        onClick={() => removeItem(item.id)}
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
