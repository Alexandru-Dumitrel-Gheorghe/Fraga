// routes/products.js

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Obține toate produsele
router.get("/", async (req, res) => {
  try {
    console.log("Ruta /api/products a fost accesată");
    const products = await Product.find();
    console.log("Produse găsite:", products);
    res.json(products);
  } catch (err) {
    console.error("Eroare la obținerea produselor:", err);
    res.status(500).json({ message: err.message });
  }
});

// Obține un produs după ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Produsul nu a fost găsit" });
    res.json(product);
  } catch (err) {
    console.error("Eroare la obținerea produsului:", err);
    res.status(500).json({ message: err.message });
  }
});

// Adaugă un produs nou (doar pentru admin)
router.post("/", async (req, res) => {
  // Implementare adăugare produs
});

// Actualizează un produs (doar pentru admin)
router.put("/:id", async (req, res) => {
  // Implementare actualizare produs
});

// Șterge un produs (doar pentru admin)
router.delete("/:id", async (req, res) => {
  // Implementare ștergere produs
});

module.exports = router;
