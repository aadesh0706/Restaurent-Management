import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Restaurant Hub</span></h1>
          <p className="tagline">
            Your one-stop solution for managing restaurants effortlessly.
          </p>
          <button onClick={() => navigate("/login")} className="cta-button">
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img 
              src="https://th.bing.com/th/id/OIP.pnwJ4iD2uce40_ZdQebXhQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" 
              alt="Management Icon" 
              className="feature-icon"
            />
            <h3>Easy Management</h3>
            <p>Streamline operations and manage your restaurant efficiently.</p>
          </div>

          <div className="feature-card">
            <img 
              src="https://th.bing.com/th/id/OIP.RZJhmy9GB_fC45aoUwIeLAHaHa?w=203&h=204&c=7&r=0&o=5&pid=1.7" 
              alt="Analytics Icon" 
              className="feature-icon"
            />
            <h3>Real-Time Analytics</h3>
            <p>Get insightful data to make better business decisions.</p>
          </div>

          <div className="feature-card">
            <img 
              src="https://th.bing.com/th/id/OIP.pnwJ4iD2uce40_ZdQebXhQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" 
              alt="Customer Icon" 
              className="feature-icon"
            />
            <h3>Enhanced Experience</h3>
            <p>Improve customer satisfaction with a seamless experience.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
