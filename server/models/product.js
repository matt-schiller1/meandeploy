const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: [3, "products must be at least 3 characters long"] },
  price: { type: Number, required: [true, "Please enter a price"] },
  url: { type: String, required: true },
}, { timestamps: true });

mongoose.model("Product", productSchema);
