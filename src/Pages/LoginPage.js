import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Username and Password are required.');
            return;
        }

        try {
            // API call to login endpoint
            const response = await axios.post("http://localhost:8082/api/auth/login", {
                username,
                password,
            });

            // Check if login was successful
            if (response.status === 200) {
                // Save token in session storage
                const token = btoa(`${username}:${password}`); // Encoding credentials
                sessionStorage.setItem('authToken', token);

                // Redirect to Product Listing page
                navigate("/products");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("Invalid username or password. Please try again.");
        }

        setError('');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <p className="login-footer">
                Don’t have an account? <a href="/register">Sign up</a>
            </p>
        </div>
    );
};

export default LoginPage;
