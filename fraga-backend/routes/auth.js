// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Înregistrare
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifică dacă utilizatorul există deja
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email-ul există deja" });

    // Creează un nou utilizator
    const newUser = new User({
      name,
      email,
      password,
    });

    // Salvează utilizatorul
    await newUser.save();

    res.status(201).json({ message: "Utilizator înregistrat cu succes" });
  } catch (err) {
    console.error("Eroare la înregistrare:", err);
    res.status(500).json({ message: "Eroare de server" });
  }
});

// Autentificare
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Găsește utilizatorul
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Email sau parolă incorectă" });

    // Verifică parola
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(400).json({ message: "Email sau parolă incorectă" });

    // Creează și atribuie un token
    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    res.header("auth-token", token).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.error("Eroare la autentificare:", err);
    res.status(500).json({ message: "Eroare de server" });
  }
});

module.exports = router;
