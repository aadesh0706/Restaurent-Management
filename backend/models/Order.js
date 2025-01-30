const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  products: [
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product", 
        required: true 
      },
      name: { type: String, required: true },  // Product name
      quantity: { type: Number, required: true },  // Ordered quantity
      price: { type: Number, required: true }  // Product price
    }
  ],
  totalAmount: { 
    type: Number, 
    required: true 
  },
  paymentStatus: { 
    type: String, 
    enum: ["Paid", "Pending", "Failed"], 
    default: "Paid"  // Defaulting to a successful fake payment
  },
  orderStatus: { 
    type: String, 
    enum: ["Pending", "Accepted", "Rejected"], 
    default: "Pending"  // Admin can update this status
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Order", OrderSchema);
