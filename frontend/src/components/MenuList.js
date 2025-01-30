import React, { useState, useEffect } from "react";
// import "./MenuList.css";
import axios from "axios";

function MenuList() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch menu data from backend
    axios.get("http://localhost:5000/api/menu")
      .then(response => setMenu(response.data))
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div className="menu-list">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menu.map((item) => (
          <div className="menu-item" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
