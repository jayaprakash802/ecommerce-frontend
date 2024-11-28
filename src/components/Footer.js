import React from 'react';
import './HeaderFooter.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>© 2024 E-Shop. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/support">Support</a>
            </div>
        </footer>
    );
};

export default Footer;
