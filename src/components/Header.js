import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

const Header = () => {
    return (
        <header className="header-container">
            <Link to="/" className="header-logo">E-Shop</Link>
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
