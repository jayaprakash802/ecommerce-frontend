import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfilePage.css";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    });
    const [updatedUser, setUpdatedUser] = useState({ ...user });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Retrieve the token from session storage
                const token = sessionStorage.getItem("authToken");

                if (!token) {
                    console.error("No token found in session storage");
                    setLoading(false);
                    return;
                }

                // Fetch user details with the token
                const response = await axios.get("http://localhost:8082/api/auth/user/details", {
                    headers: {
                        Authorization: `Basic ${token}`,
                    },
                });

                const userData = response.data;
                const { username: name, email, role } = userData;
                setUser({ name, email, role });
                setUpdatedUser({ name, email, role });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user details:", error);
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSave = async () => {
        try {
            // Retrieve the token from session storage
            const token = sessionStorage.getItem("authToken");

            if (!token) {
                console.error("No token found in session storage");
                return;
            }

            // Optionally send the updated user data to an API to save changes
            await axios.put(
                "http://localhost:8082/api/auth/user/update",
                updatedUser,
                {
                    headers: {
                        Authorization: `Basic ${token}`,
                    },
                }
            );

            setUser(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
