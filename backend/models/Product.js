const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },       // Ensure image is required
  category: { type: String, required: true },    // Ensure category is required
  description: { type: String, required: true }, // Ensure description is required
});

module.exports = mongoose.model("Product", ProductSchema);
