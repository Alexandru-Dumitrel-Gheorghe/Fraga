// seed.js

const mongoose = require("mongoose");
const Product = require("./models/Product");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectat la MongoDB");
    seedDB();
  })
  .catch((err) => console.error("Eroare la conectarea la MongoDB:", err));

const products = [
  {
    name: "Handgestrickter Pullover",
    description: "Warmer handgestrickter Pullover aus Wolle.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1555836721-6fec17bd948a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Handgestrickte Mütze",
    description: "Weiche handgestrickte Mütze für kalte Tage.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1573581042946-359905ea3622?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
  },
  {
    name: "Handgestrickter Schal",
    description: "Langer handgestrickter Schal aus feiner Wolle.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1694447814836-c93ab70f7398?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  {
    name: "Handgestrickte Handschuhe",
    description: "Bequeme handgestrickte Handschuhe.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1706815957884-9cd434e152ea?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
  },
  {
    name: "Handgestrickte Socken",
    description: "Warme handgestrickte Socken für den Winter.",
    price: 14.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664368832388-83036b512f4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
  },
  {
    name: "Handgestricktes Stirnband",
    description: "Modisches handgestricktes Stirnband.",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1700676195086-81b936390de4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
  },
  {
    name: "Handgestrickte Babydecke",
    description: "Weiche handgestrickte Decke für Babys.",
    price: 39.99,
    image:
      "https://plus.unsplash.com/premium_photo-1693011411069-0b7e39600876?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Handgestricktes Kleid",
    description: "Elegantes handgestricktes Kleid für besondere Anlässe.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Handgestrickter Cardigan",
    description: "Bequemer handgestrickter Cardigan für den Alltag.",
    price: 69.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664542157778-4dcccb04169e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "Handgestrickte Decke",
    description: "Große handgestrickte Decke für kalte Abende.",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1622562177151-63dbb7acf757?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
];

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Baza de date a fost populată cu produse noi.");
    mongoose.connection.close();
  } catch (err) {
    console.error("Eroare la popularea bazei de date:", err);
  }
};
