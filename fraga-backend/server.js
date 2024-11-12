// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectare la MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectat la MongoDB"))
  .catch((err) => console.error("Eroare la conectarea la MongoDB:", err));

// Importă rutele
const authRoutes = require("./routes/auth"); // Asigură-te că ai aceste rute sau le poți ignora dacă nu sunt necesare
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders"); // Asigură-te că ai aceste rute sau le poți ignora dacă nu sunt necesare

// Utilizează rutele
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Rută de test
app.get("/", (req, res) => {
  res.send("API funcționează");
});

// Pornirea serverului
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
