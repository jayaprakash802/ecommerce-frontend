import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderFooter.css";
import logo from "./ecomLogo.webp"; // Ensure the icon is in the same directory or update the path.

const Header = () => {
    const navigate = useNavigate();

    // Check if the user is authenticated
    const isAuthenticated = !!sessionStorage.getItem("authToken");

    const handleLogout = () => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("userId"); // Clear the token
        navigate("/"); // Redirect to the login page
    };

    return (
        <header className="header-container">
            <div className="header-logo-container">
                <img src={logo} alt="FlickCart Logo" className="header-logo-icon" />
                <Link to="/" className="header-logo-text">FlickCart</Link>
            </div>
            <nav className="header-nav">
                {isAuthenticated ? (
                    <>
                        <Link to="/home">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/profile">Profile</Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/home">Home</Link>
                        <Link to="/">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
