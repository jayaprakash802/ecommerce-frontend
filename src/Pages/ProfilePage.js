import React, { useState, useEffect } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
    // Mock user data (replace this with API call or authentication context)
    const loggedInUser = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
    };

    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    });

    const [updatedUser, setUpdatedUser] = useState({ ...user });

    useEffect(() => {
        // Populate user details on load (replace with actual API call)
        setUser(loggedInUser);
        setUpdatedUser(loggedInUser);
    }, []);

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
        // Here you can send updatedUser to an API to persist changes
    };

    return (
        <div className="profile-container">
            <main className="profile-content">
                <h1>My Profile</h1>
                {!isEditing ? (
                    <div className="profile-details">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Role:</strong> {user.role}</p>
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
                            <label htmlFor="role">Role</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={updatedUser.role}
                                onChange={handleChange}
                                disabled
                            />
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
