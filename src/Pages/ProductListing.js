import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductListing.css';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, [])
    return (
        <div className="product-listing-container">
            <h1 className="product-listing-title">Our Products</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img
                            className="product-image"
                            src={product.image || "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NzFzS1BRRzA4NTJUci9vckVTY21rM2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXZka3Q2dVFYV2lxTm4wNXBJcGZoM1RkcERRMUVIWTBwNlRNS3dVelNTTTVB&traceId=1"} // Placeholder image
                            alt={product.name}
                        />
                        <div className="product-info">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">${product.price}</p>
                            <a className="add-to-cart-button" href={`/products/${product.id}`}>
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
