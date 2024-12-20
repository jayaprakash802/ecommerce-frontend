import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-container">
            

            <main className="about-content">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>YourWebsite</strong> – your trusted destination for premium products and services.
                </p>

                <section>
                    <h2>Who We Are</h2>
                    <p>
                        At <strong>YourWebsite</strong>, we are passionate about providing high-quality products that meet your needs and exceed your expectations.
                    </p>
                </section>

                <section>
                    <h2>Our Mission</h2>
                    <ul>
                        <li>To provide a seamless and secure shopping experience.</li>
                        <li>To offer products that inspire and empower our customers.</li>
                        <li>To ensure customer satisfaction at every touchpoint.</li>
                    </ul>
                </section>

                <section>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Quality You Can Trust:</strong> Every product we offer goes through rigorous quality checks.</li>
                        <li><strong>Affordable Prices:</strong> Great value shouldn’t break the bank.</li>
                        <li><strong>Fast & Reliable Delivery:</strong> Quick and hassle-free shipping.</li>
                        <li><strong>Exceptional Customer Support:</strong> Our team is here for you 24/7.</li>
                    </ul>
                </section>

                <section>
                    <h2>Join Us</h2>
                    <p>
                        Stay connected with us on <a href="/social-media">social media</a> or subscribe to our newsletter for exclusive updates and offers.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
