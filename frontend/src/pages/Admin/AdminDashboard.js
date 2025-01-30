import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import Navbar from "../../components/Navbar";
function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "", image: "", category: "", description: "" });
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",       // Add Image
    category: "",    // Add Category
    description: "", // Add Description
  });
  
  // Fetch products and orders
  // useEffect(() => {
  //   fetchProducts();
  //   fetchOrders();
  // }, []);

  useEffect(() => {
    const hasRefreshed = sessionStorage.getItem("hasRefreshed");

    if (!hasRefreshed) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload(); // Refresh the page only once
    } else {
      fetchProducts();
      fetchOrders();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // const fetchOrders = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/api/orders");
  //     setOrders(res.data);
  //   } catch (err) {
  //     console.error("Error fetching orders:", err);
  //   }
  // };
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      console.log("Orders fetched:", res.data);  // ✅ Debugging
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err.response?.data || err.message);
    }
  };
  
  

  // const updateOrderStatus = async (orderId, status) => {
  //   try {
  //     await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status });
  //     fetchOrders(); // Refresh orders after update
  //   } catch (err) {
  //     console.error("Error updating order status:", err);
  //   }
  // };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status });
  
      // ✅ Update UI immediately
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, orderStatus: status } : order
        )
      );
  
      console.log(`Order ${orderId} updated to ${status}`);
    } catch (err) {
      console.error("Error updating order status:", err.response?.data || err.message);
    }
  };
  

  // Handle adding new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/products", newProduct);
      setProducts([...products, res.data]);
      setNewProduct({ name: "", price: "", stock: "", image: "", category: "", description: "" });
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // Handle product deletion
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="admin-dashboard">

      <h1>Admin Dashboard</h1>

      {/* Add Product Form */}
      <div className="add-product">
        <h2>Add Product</h2>
        <form onSubmit={handleAddProduct}>
            <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
            <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
            <input type="number" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} required />
            <input type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} required />
            <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required />
            <textarea placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required></textarea>
            <button type="submit">Add Product</button>
        </form>

      </div>

      {/* Product List */}
      <div className="product-list">
        <h2>Manage Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <img src={product.image} alt={product.name} className="product-img" />
              <div>
                <span>{product.name} - ${product.price} - Stock: {product.stock}</span>
                <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Order List */}
      {/* <div className="order-list">
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <span>Order #{order._id} - Status: {order.status}</span>
              <button onClick={() => console.log("Edit Order", order._id)}>Edit</button>
            </li>
          ))}
        </ul>
      </div> */}
      {/* Order List
      <div className="order-list">
        <h2>Orders</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <h3>Order #{order._id}</h3>
              <p><strong>Customer:</strong> {order.userId?.name} ({order.userId?.email})</p>
              <p><strong>Total Price:</strong> ${order.totalPrice}</p>
              <p><strong>Status:</strong> {order.status}</p>

              <h4>Items Ordered:</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId._id}>
                    <img src={item.productId.image} alt={item.productId.name} width="50" />
                    {item.productId.name} - {item.quantity}x
                  </li>
                ))}
              </ul>

              {order.status === "Pending" && (
                <div className="order-actions">
                  <button className="accept-btn" onClick={() => updateOrderStatus(order._id, "Accepted")}>Accept</button>
                  <button className="reject-btn" onClick={() => updateOrderStatus(order._id, "Rejected")}>Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Order List */}
      <div className="order-list">
        <h2>Orders</h2>
        {orders && orders.length > 0 ? (   // ✅ Only map if orders exist
          <ul>
            {orders.map((order) => (
              <li key={order._id}>
                <span>Order #{order._id}</span>

                <p><strong>Customer:</strong> {order.userId?.name} ({order.userId?.email})</p>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.productId}>
                      {product.name} - {product.quantity} pcs - ${product.price}
                    </li>
                  ))}
                </ul>
                {/* <p><strong>Total Price:</strong> ${order.totalPrice}</p> */}
                <p><strong>Status:</strong> {order.orderStatus}</p>
                <button onClick={() => updateOrderStatus(order._id, "Accepted")} style={{ backgroundColor: "green", color: "white" }}>
                Accept
              </button>
              <button onClick={() => updateOrderStatus(order._id, "Rejected")} style={{ backgroundColor: "red", color: "white", marginLeft: "10px" }}>
                Reject
              </button>

              </li>
            ))}
          </ul>
        ) : (
          <p>No orders available.</p>  // ✅ Show a message if orders is empty
        )}
      </div>

    </div>
  );
}

export default AdminDashboard;
