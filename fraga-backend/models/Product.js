const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true }, // Categorie (Pulovere, Taschen, Mützen, Hosen)
});

module.exports = mongoose.model("Product", ProductSchema);
