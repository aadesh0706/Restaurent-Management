import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  // Fake payment function
  const handlePayment = () => {
    alert("Redirecting to Fake Payment...");
    navigate("/fake-payment"); // Redirect to fake payment page
  };

  if (!cart || cart.length === 0) {
    return <h2 className="empty-cart">🛒 Your cart is empty.</h2>;
  }

  return (
    <div className="cart">
      <h1 className="cart-title">🛍️ Your Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((product, index) =>
          product ? (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-img" />
              <div className="cart-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Quantity: <strong>{product.quantity}</strong></p>
                <p>Price: <strong>${product.price}</strong></p>
              </div>
            </div>
          ) : (
            <p key={index} className="error-message">⚠️ Invalid product in cart</p>
          )
        )}
      </div>
      
      {/* Total Price & Payment Section */}
      <div className="cart-footer">
        <h2>Total: <span className="total-price">${totalPrice.toFixed(2)}</span></h2>
        <button className="checkout-btn" onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Cart;
