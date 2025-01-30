import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/auth/login", formData);
  //     localStorage.setItem("token", res.data.token);
      
  //     if (res.data.role === "admin") {
  //       navigate("/admin/dashboard");
  //     } else {
  //       navigate("/customer/dashboard");
  //     }
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Login failed!");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
  
      // Store authentication details
      localStorage.setItem("token", res.data.token);
  
      // Check if userId exists before storing it
      if (res.data.userId) {
        localStorage.setItem("userId", res.data.userId);
      }
      const userRole = res.data.role;
      Cookies.set("role", userRole, { expires: 1 }); // `userRole` should be "admin" or "customer"

      localStorage.setItem("role", res.data.role); // Store role correctly
      console.log("API Response:", res.data);
      sessionStorage.setItem("hasRefreshed", "true");

  
      if (res.data.role === "admin") {
        // navigate("/admin/dashboard");
        window.location.href = "/admin/dashboard";
      } else {
        // navigate("/customer/dashboard");
        window.location.href = "/customer/dashboard";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };
  
  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;
