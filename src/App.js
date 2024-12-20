import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProductListing from './Pages/ProductListing';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/SignupPage';
import ProductDetails from './Pages/ProductDetails';
import CartPage from "./Pages/CartPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProfilePage from "./Pages/ProfilePage";


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/products" element={<ProductListing />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
