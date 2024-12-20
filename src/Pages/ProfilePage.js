import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: " ",
        email: "",
        phone: "",
        address: "",
    });

    const [updatedUser, setUpdatedUser] = useState({ ...user });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSave = () => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            

            <main className="profile-content">
                <h1>My Profile</h1>

                {!isEditing ? (
                    <div className="profile-details">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Address:</strong> {user.address}</p>
                        <button onClick={handleEditToggle}>Edit Profile</button>
                    </div>
                ) : (
                    <form className="profile-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={updatedUser.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={updatedUser.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={updatedUser.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={updatedUser.address}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="button" onClick={handleSave}>Save</button>
                        <button type="button" onClick={handleEditToggle}>Cancel</button>
                    </form>
                )}
            </main>
        </div>
    );
};

export default ProfilePage;
