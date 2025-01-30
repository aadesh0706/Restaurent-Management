const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product
// router.post("/", async (req, res) => {
//   const { name, price, quantity } = req.body;
//   const newProduct = new Product({ name, price, quantity });
//   await newProduct.save();
//   res.json(newProduct);
// });
router.post("/", async (req, res) => {
    try {
      const { name, price, quantity, image, category, description } = req.body;
  
      if (!name || !price || !quantity || !image || !category || !description) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newProduct = new Product({
        name,
        price,
        quantity,
        image,
        category,
        description,
      });
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });
  
// Delete a product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

// Update product quantity
router.put("/:id", async (req, res) => {
  const { quantity } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
  res.json(updatedProduct);
});

module.exports = router;
