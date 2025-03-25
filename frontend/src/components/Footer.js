import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  padding: 40px 20px 20px;
  background: linear-gradient(to right, #1a1a1a, #333);
  color: #f5f5f5;
  font-size: 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
  
  h3 {
    color: #fff;
    margin-bottom: 15px;
    font-size: 1.2rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 50px;
      height: 2px;
      background: #ff6f61;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 8px;
      
      a {
        color: #ddd;
        text-decoration: none;
        transition: color 0.3s;
        
        &:hover {
          color: #ff6f61;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  
  a {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s;
    
    &:hover {
      color: #ff6f61;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
`;

const Highlight = styled.span`
  color: #ff6f61;
  font-weight: bold;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Restaurant Hub</h3>
          <p>Your one-stop solution for restaurant management, offering seamless operations and enhanced customer experiences.</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Our Menu</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <ul>
            <li>123 Restaurant Street</li>
            <li>Foodie City, FC 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@restauranthub.com</li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; 2025 <Highlight>Restaurant Hub</Highlight>. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
