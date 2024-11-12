// models/Product.js

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  materials: { type: String, required: true }, // Câmp adăugat pentru materiale
  price: { type: Number, required: true },
  image: { type: String },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true }, // Categorie (taschen, handgefertigte-kleider, pullover-handgemacht, handgemacht-cardigans, genaehte-kleider)
});

module.exports = mongoose.model("Product", ProductSchema);
