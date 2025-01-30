import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart(); // Get addToCart from CartContext
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>

      {/* Quantity Selector */}
      <div className="quantity-control">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      {/* Add to Cart Button */}
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
