import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">Restaurant Hub</span></h1>
          <p className="tagline">
            Your one-stop solution for managing restaurants effortlessly.
          </p>
          <div className="cta-buttons">
            <button onClick={() => navigate("/login")} className="cta-button primary">
              Get Started
            </button>
            <button onClick={() => navigate("/about")} className="cta-button secondary">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Discover the benefits of our restaurant management platform</p>
        </div>
        
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://th.bing.com/th/id/OIP.pnwJ4iD2uce40_ZdQebXhQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" 
                alt="Management Icon" 
                className="feature-icon"
              />
            </div>
            <h3>Easy Management</h3>
            <p>Streamline operations and manage your restaurant efficiently with our intuitive dashboard and tools.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://th.bing.com/th/id/OIP.RZJhmy9GB_fC45aoUwIeLAHaHa?w=203&h=204&c=7&r=0&o=5&pid=1.7" 
                alt="Analytics Icon" 
                className="feature-icon"
              />
            </div>
            <h3>Real-Time Analytics</h3>
            <p>Get insightful data to make better business decisions with comprehensive reporting and visualization.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <img 
                src="https://th.bing.com/th/id/OIP.pnwJ4iD2uce40_ZdQebXhQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" 
                alt="Customer Icon" 
                className="feature-icon"
              />
            </div>
            <h3>Enhanced Experience</h3>
            <p>Improve customer satisfaction with a seamless experience and personalized service options.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header light">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>Restaurant Hub has transformed how we manage our business. Our operations are smoother, and our customers are happier!</p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Owner, The Cozy Corner</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>The analytics features have helped us identify opportunities we never would have seen otherwise. Highly recommended!</p>
            <div className="testimonial-author">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <p>Manager, Fusion Bites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Restaurant?</h2>
        <p>Join thousands of restaurant owners who have improved their business with our platform.</p>
        <button onClick={() => navigate("/register")} className="cta-button primary large">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}

export default Home;
