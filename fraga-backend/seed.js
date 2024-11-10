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
  // Pullover
  {
    name: "Handgestrickter Pullover",
    category: "pullover",
    description: "Warmer handgestrickter Pullover für kalte Tage.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541629007334-1f6c44705182",
    stock: 10,
  },
  {
    name: "Handgestrickter Pullover",
    category: "pullover",
    description: "Warmer handgestrickter Pullover für kalte Tage.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541629007334-1f6c44705182",
    stock: 10,
  },
  {
    name: "Handgestrickter Pullover",
    category: "pullover",
    description: "Warmer handgestrickter Pullover für kalte Tage.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541629007334-1f6c44705182",
    stock: 10,
  },
  {
    name: "Eleganter Pullover",
    category: "pullover",
    description: "Handgestrickter Pullover, perfekt für den Alltag.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1648946647674-3bcc0c6f3799?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  // Adaugă alte 8 produse pentru Pullover...

  // Taschen
  {
    name: "Handgemachte Tasche",
    category: "taschen",
    description: "Elegante handgemachte Tasche für jeden Anlass.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1527383214149-cb7be04ae387",
    stock: 20,
  },
  {
    name: "Stilvolle Tasche",
    category: "taschen",
    description: "Handgefertigte Tasche für Modebewusste.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1595326995002-3c708e5caed7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  // Adaugă alte 8 produse pentru Taschen...

  // Mützen
  {
    name: "Handgestrickte Mütze",
    category: "muetzen",
    description: "Warme handgestrickte Mütze für kalte Tage.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1573581042946-359905ea3622",
    stock: 30,
  },
  {
    name: "Wintermütze",
    category: "muetzen",
    description: "Handgefertigte Mütze für zusätzlichen Komfort.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1636569149691-9345c0f2673c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
  },
  // Adaugă alte 8 produse pentru Mützen...

  // Hosen
  {
    name: "Bequeme Hose",
    category: "hosen",
    description: "Handgefertigte Hose, die Stil und Komfort vereint.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1616178193482-4dad15347c26",
    stock: 18,
  },
  {
    name: "Freizeithose",
    category: "hosen",
    description: "Handgemachte Hose für entspannte Tage.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1701318227304-24c9e8c0ee88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
  },
  // Adaugă alte 8 produse pentru Hosen...
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

seedDB();
