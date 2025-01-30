import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import UserDashboard from "./pages/User/UserDashboard.js";
import Cart from "./pages/User/Cart";
import Checkout from "./pages/User/Checkout";
import FakePayment from "./pages/User/FakePayment";
import { CartProvider } from "./pages/User/CartContext";
import "./App.js";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/customer/dashboard" element={<UserDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/fake-payment" element={<FakePayment />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
