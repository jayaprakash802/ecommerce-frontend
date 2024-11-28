import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProductListing from './Pages/ProductListing';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/SignupPage';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                    <Route path="/login" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/products" element={<ProductListing />} />
                        <Route path="/register" element={<Register />} />
                        
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
