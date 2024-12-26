import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    const userId = sessionStorage.getItem("userId");


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError("Failed to fetch product details");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        const quantity = 1; // Default quantity to add (can be made dynamic if needed)

        try {
            const response = await axios.post(
                ` `,
                null, // No request body needed; parameters are passed as query params
                {
                    params: {
                        productId: id,
                        quantity,
                    },
                }
            );
            console.log("Cart updated:", response.data);
            alert(`${product.name} added to cart successfully!`);
        } catch (err) {
            console.error("Error adding product to cart:", err);
            alert("Failed to add product to cart. Please try again.");
        }
    };

    const handleBuyNow = () => {
        // Logic for direct purchase
        if (!product) return;

        // Redirect to checkout page with product details
        navigate(`/checkout`, { state: { productId: id, product } });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <img
                src={"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1"}
                alt={product.name}
            />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock} available</p>

            {/* Buttons */}
            <div className="product-actions">
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                <button className="buy-now-button" onClick={handleBuyNow}>
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
