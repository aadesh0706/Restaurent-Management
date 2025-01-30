import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FakePayment() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Retrieve userId from localStorage (Ensure it's stored after login)
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.error("User ID is missing. Please log in.");
      alert("User not found. Please log in again.");
      navigate("/login");
      return;
    }

    // Simulate successful payment and save order
    const saveOrder = async () => {
      try {
        const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        await axios.post("http://localhost:5000/api/orders/create", {
          userId, // Ensure userId is sent properly
          products: cart.map((item) => ({
            productId: item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          totalAmount,
        });

        clearCart();
        alert("Payment Successful! Your order has been placed.");
        navigate("/customer/dashboard");
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Error placing order. Please try again.");
      }
    };

    saveOrder();
  }, [userId, cart, navigate, clearCart]);

  return (
    <div className="payment-container">
      <h1>Processing Payment...</h1>
    </div>
  );
}

export default FakePayment;
