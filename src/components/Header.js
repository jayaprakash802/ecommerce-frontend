import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';
import logo from './ecomLogo.webp'; // Ensure the icon is in the same directory or update the path.

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-logo-container">
                <img src={logo} alt="FlickCart Logo" className="header-logo-icon" />
                <Link to="/" className="header-logo-text">FlickCart</Link>
            </div>
            <nav className="header-nav">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
