import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"; // Import ProductCard
import { useCart } from "./CartContext"; // Import Cart Context
import "./UserDashboard.css";

function UserDashboard() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Get addToCart from CartContext
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="user-dashboard">
      <h1>Welcome to Our Store</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <button className="go-to-cart" onClick={() => navigate("/cart")}>
        Go to Cart
      </button>
    </div>
  );
}

export default UserDashboard;
