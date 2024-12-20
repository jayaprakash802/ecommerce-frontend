import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-container">
         

            <main className="contact-content">
                <h1>Contact Us</h1>
                <p>
                    We’d love to hear from you! If you have any questions, feedback, or concerns, feel free to reach out to us.
                </p>

                <section className="contact-info">
                    <h2>Our Contact Information</h2>
                    <p><strong>Email:</strong> support@ecommerce.com</p>
                    <p><strong>Phone:</strong> 9346578405, 9182201970</p>
                    <p><strong>Address:</strong> 299 BHEL cyber colony, Osaman nagar, Hyderabad, India</p>
                </section>

                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default ContactUs;
