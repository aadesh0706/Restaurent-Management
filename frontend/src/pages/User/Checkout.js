import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (address.trim() === "") {
      alert("Please enter an address.");
      return;
    }
    navigate("/fake-payment");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <h3>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.product._id}>
            {item.product.name} - ${item.product.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
