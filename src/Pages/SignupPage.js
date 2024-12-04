import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", password: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/api/auth/register", form);
      
      if (response.status === 201) {
        alert("Registration successful! Navigating to login page");
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
