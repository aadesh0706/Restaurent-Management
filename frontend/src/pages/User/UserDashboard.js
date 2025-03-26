import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"; // Import ProductCard
import { useCart } from "./CartContext"; // Import Cart Context
import "./UserDashboard.css";

function UserDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart(); // Get addToCart from CartContext
  const navigate = useNavigate();

  // Fetch products from the backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://restaurent-backend-inky.vercel.app/api/products");
      setProducts(res.data);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(res.data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="user-dashboard">
      <div className="dashboard-hero">
        <div className="hero-content">
          <h1>Discover Our <span className="highlight">Menu</span></h1>
          <p>Explore our delicious offerings prepared with the finest ingredients</p>
        </div>
      </div>
      
      <div className="dashboard-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        
        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading delicious food...</p>
        </div>
      ) : (
        <div>
          <div className="products-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <i className="fas fa-utensils no-results-icon"></i>
                <h3>No items found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
          
          <div className="cart-floating-button">
            <button className="go-to-cart" onClick={() => navigate("/cart")}>
              <i className="fas fa-shopping-cart"></i>
              View Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
