import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigateToProducts = () => {
        navigate("/products");
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-text">
                    <h1>
                        Welcome to <span className="highlight">Our Store!</span>
                    </h1>
                    <p className="hero-subtext">
                        🎉 Discover the best deals and <span className="exclusive-offers">exclusive offers</span> just for you.
                    </p>
                    <button className="shop-now-btn" onClick={handleNavigateToProducts}>
                        🛒 Start Shopping
                    </button>
                </div>
                <img
                    src="https://t3.ftcdn.net/jpg/04/65/46/52/240_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"
                    alt="Big Sale Banner"
                    className="hero-image"
                />
            </div>

            {/* Sales Section */}
            <div className="sales-section">
                <h2>🔥 Big Billion Sale is Live!</h2>
                <p>Don't miss out on massive discounts across all categories.</p>
                <button className="shop-sale-btn" onClick={handleNavigateToProducts}>
                    Shop the Sale
                </button>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <h2>Shop by Category</h2>
                <div className="categories">
                    <div className="category">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-u56YM-EKhjI8MzAGcx5G3fipD1xCTYpWg&s"
                            alt="Electronics"
                        />
                        <p>Electronics</p>
                    </div>
                    <div className="category">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuNQuW7eUj3wyYApFSgZnBE0oMeDIvwfL9g&s"
                            alt="Clothing"
                        />
                        <p>Clothing</p>
                    </div>
                    <div className="category">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegWlFap21Mes0hWF-KJ8f09ZpKXdZThaO7Q&s"
                            alt="Home Essentials"
                        />
                        <p>Home Essentials</p>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="featured-products-section">
                <h2>Featured Products</h2>
                <div className="products">
                    <div className="product">
                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Product 1"
                        />
                        <p>Samsung Galaxy Watch 4</p>
                        <p>$99.99</p>
                    </div>
                    <div className="product">
                        <img
                            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                            alt="Product 2"
                        />
                        <p>Nike Air Shoe</p>
                        <p>$79.99</p>
                    </div>
                    <div className="product">
                        <img
                            src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                            alt="Product 3"
                        />
                        <p>Apple Air Pods</p>
                        <p>$49.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
