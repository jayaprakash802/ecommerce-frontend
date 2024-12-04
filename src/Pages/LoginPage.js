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
            setError('Email and Password are required.');
            return;
        }

        // Clear the error and log the credentials (replace this with actual API call)
        try {
            const response = await axios.post("http://localhost:8082/api/auth/login", {
              username,
              password,
            });
            if (response.status === 200) {
                // Redirect to Product Listing page
                navigate("/products");
              }
            //alert(response.data);
          } catch (error) {
            console.error(error);
            alert("Login failed");
          }
        setError('');
        console.log('Login successful:', { username, password });

        // Redirect or perform other actions on successful login
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
