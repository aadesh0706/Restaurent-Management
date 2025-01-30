import React from "react";

function DishDetails() {
  return (
    <div className="dish-details">
      <h2>Dish Name</h2>
      <img src="/images/dish.jpg" alt="Dish" />
      <p>Description of the dish.</p>
      <p><strong>Price:</strong> $10.99</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default DishDetails;
