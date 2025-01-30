const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

// Get all orders
// router.get("/", async (req, res) => {
//   const orders = await Order.find();
//   res.json(orders);
// });

// Update order status
router.put("/:id", async (req, res) => {
  const { status } = req.body;
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(updatedOrder);
});

router.post("/create", async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    const newOrder = new Order({
      userId,
      products,
      totalAmount,
      paymentStatus: "Paid",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});


// Get all orders (for admin)
router.get("/", async (req, res) => {
    try {
      const orders = await Order.find().populate("userId", "name email"); // Populate user details
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

// Accept or Reject Order
router.put("/:orderId/status", async (req, res) => {
    const { status } = req.body;
    try {
      const order = await Order.findByIdAndUpdate(
        req.params.orderId,
        { orderStatus: status }, // 🔥 Ensure correct field name
        { new: true }
      );
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Error updating order status", error });
    }
  });
  


module.exports = router;
