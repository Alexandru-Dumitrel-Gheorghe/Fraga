// routes/orders.js

const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const verifyToken = require("../middleware/verifyToken");

// Ruta GET pentru a obține comenzile utilizatorului autentificat
router.get("/", verifyToken, async (req, res) => {
  try {
    // Găsește comenzile pentru utilizatorul autentificat
    const orders = await Order.find({ user: req.user._id }).populate(
      "orderItems.product",
      "name price"
    );
    res.status(200).json(orders);
  } catch (err) {
    console.error("Eroare la obținerea comenzilor:", err);
    res.status(500).json({ message: err.message });
  }
});

// Ruta POST existentă pentru plasarea unei noi comenzi
router.post("/", verifyToken, async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.user._id,
      orderItems: req.body.orderItems,
      totalPrice: req.body.totalPrice,
      shippingInfo: req.body.shippingInfo,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    console.error("Eroare la crearea comenzii:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
