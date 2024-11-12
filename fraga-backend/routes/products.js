// routes/products.js

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Obține toate produsele sau filtrează după categorie
router.get("/", async (req, res) => {
  try {
    console.log("Ruta /api/products a fost accesată");
    const category = req.query.category;
    const query = category ? { category } : {}; // Filtrare după categorie dacă există

    const products = await Product.find(query);
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
  try {
    const { name, description, materials, price, image, stock, category } =
      req.body;
    const newProduct = new Product({
      name,
      description,
      materials,
      price,
      image,
      stock,
      category,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Eroare la adăugarea produsului:", err);
    res.status(500).json({ message: err.message });
  }
});

// Actualizează un produs (doar pentru admin)
router.put("/:id", async (req, res) => {
  try {
    const { name, description, materials, price, image, stock, category } =
      req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, materials, price, image, stock, category },
      { new: true } // Returnează produsul actualizat
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Produsul nu a fost găsit" });

    res.json(updatedProduct);
  } catch (err) {
    console.error("Eroare la actualizarea produsului:", err);
    res.status(500).json({ message: err.message });
  }
});

// Șterge un produs (doar pentru admin)
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Produsul nu a fost găsit" });

    res.json({ message: "Produsul a fost șters cu succes" });
  } catch (err) {
    console.error("Eroare la ștergerea produsului:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
