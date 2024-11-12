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
  // Taschen (10 produse)
  {
    name: "Elegante Handgemachte Tasche",
    category: "Taschen",
    description: "Elegante handgemachte Tasche für jeden Anlass.",
    materials: "Leder, Stoff, Metallelemente",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1527383214149-cb7be04ae387",
    stock: 20,
  },
  {
    name: "Stilvolle Umhängetasche",
    category: "Taschen",
    description: "Handgefertigte Umhängetasche aus hochwertigem Leder.",
    materials: "Leder, Schnallen, Stofffutter",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1595326995002-3c708e5caed7",
    stock: 15,
  },
  {
    name: "Vintage Rucksack",
    category: "Taschen",
    description: "Handgefertigter Rucksack mit Vintage-Design.",
    materials: "Canvas, Leder, Metallverschlüsse",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    stock: 10,
  },
  {
    name: "Moderne Clutch",
    category: "Taschen",
    description: "Elegante Clutch für besondere Anlässe.",
    materials: "Satin, Perlen, Metallakzente",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541629007334-1f6c44705182",
    stock: 25,
  },
  {
    name: "Sportliche Tasche",
    category: "Taschen",
    description: "Handgemachte sportliche Tasche aus robustem Material.",
    materials: "Nylon, Leder, Reißverschlüsse",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1543325998-4b7c52206dca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
  },
  {
    name: "Designer Handtasche",
    category: "Taschen",
    description: "Luxuriöse Designer-Handtasche mit einzigartigem Design.",
    materials: "Leder, Edelsteine, Metallteile",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1618939552738-000685e6b199?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Reisetasche",
    category: "Taschen",
    description: "Geräumige handgefertigte Reisetasche mit mehreren Fächern.",
    materials: "Canvas, Leder, Nylon",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "Elegante Aktentasche",
    category: "Taschen",
    description: "Handgefertigte Aktentasche für professionelle Zwecke.",
    materials: "Leder, Stoff, Metallverschlüsse",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Crossbody Tasche",
    category: "Taschen",
    description: "Praktische Crossbody Tasche für den täglichen Gebrauch.",
    materials: "Leder, Nylon, Metallakzente",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1516765865430-ac8d320b9208?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 22,
  },
  {
    name: "Nachttasche",
    category: "Taschen",
    description: "Handgemachte Nachttasche mit stilvollem Design.",
    materials: "Stoff, Leder, Reißverschlüsse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1484527273420-c598cb0601f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
  },

  // Handgefertigte Kleider (10 produse)
  {
    name: "Elegantes Abendkleid",
    category: "Handgefertigte Kleider",
    description: "Handgefertigtes Abendkleid mit funkelnden Verzierungen.",
    materials: "Seide, Spitze, Pailletten",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1619528639218-cc0f53cd31c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
  {
    name: "Sommerkleid mit Blumenmuster",
    category: "Handgefertigte Kleider",
    description: "Leichtes, handgefertigtes Sommerkleid mit Blumenmuster.",
    materials: "Baumwolle, Leinen",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1617632680770-ccc5406c42c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  {
    name: "Maxikleid aus Chiffon",
    category: "Handgefertigte Kleider",
    description: "Elegantes Maxikleid aus Chiffon für besondere Anlässe.",
    materials: "Chiffon, Seide",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Bauchfreies Sommerkleid",
    category: "Handgefertigte Kleider",
    description: "Handgefertigtes bauchfreies Sommerkleid mit bunten Mustern.",
    materials: "Baumwolle, Spitze",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
  },
  {
    name: "Langes Sommerkleid mit Stickerei",
    category: "Handgefertigte Kleider",
    description:
      "Langes, handgefertigtes Sommerkleid mit aufwendiger Stickerei.",
    materials: "Leinen, Baumwolle",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1716674980090-8043213205e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "A-Linien-Kleid aus Baumwolle",
    category: "Handgefertigte Kleider",
    description: "Komfortables A-Linien-Kleid aus hochwertiger Baumwolle.",
    materials: "Baumwolle, Elastan",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1701119527218-ceed8ec844e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
  },
  {
    name: "Festliches Cocktailkleid",
    category: "Handgefertigte Kleider",
    description: "Handgefertigtes Cocktailkleid mit eleganten Details.",
    materials: "Satin, Spitze",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1617258856099-476dcceae20d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Boho-Stil Kleid",
    category: "Handgefertigte Kleider",
    description: "Handgefertigtes Boho-Kleid mit lockerer Passform.",
    materials: "Leinen, Baumwolle",
    price: 139.99,
    image:
      "https://plus.unsplash.com/premium_photo-1708276238428-4131c56a5487?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
  },
  {
    name: "Elegantes Wickelkleid",
    category: "Handgefertigte Kleider",
    description: "Handgefertigtes Wickelkleid für einen schmeichelhaften Look.",
    materials: "Viskose, Spitze",
    price: 169.99,
    image:
      "https://images.unsplash.com/photo-1617253123560-ad58f29eacbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Kurzärmeliges Cocktailkleid",
    category: "Handgefertigte Kleider",
    description:
      "Handgefertigtes kurzärmeliges Cocktailkleid mit glänzenden Akzenten.",
    materials: "Satin, Perlen",
    price: 229.99,
    image:
      "https://plus.unsplash.com/premium_photo-1708276238428-4131c56a5487?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },

  // Pullover (10 produse)
  {
    name: "Handgestrickter Pullover",
    category: "Pullover",
    description: "Warmer handgestrickter Pullover für kalte Tage.",
    materials: "Wolle, Baumwolle",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1531356971115-564896495bef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Eleganter Pullover",
    category: "Pullover",
    description: "Handgestrickter Pullover, perfekt für den Alltag.",
    materials: "Kaschmir, Wolle",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1648946647674-3bcc0c6f3799?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  {
    name: "Lässiger Hoodie",
    category: "Pullover",
    description: "Bequemer, handgefertigter Hoodie für entspannte Tage.",
    materials: "Baumwolle, Polyester",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1483656166969-b06816dfb1a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
  },
  {
    name: "Oversize-Pullover",
    category: "Pullover",
    description: "Großzügig geschnittener Pullover für einen modernen Look.",
    materials: "Baumwolle, Acryl",
    price: 45.99,
    image:
      "https://plus.unsplash.com/premium_photo-1670910345720-c2a4f07afd13?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 18,
  },
  {
    name: "Strickpullover mit Muster",
    category: "Pullover",
    description: "Handgefertigter Pullover mit trendigem Muster.",
    materials: "Wolle, Baumwolle",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1610765987208-06bbd5d2a1a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "Gestrickter Rollkragenpullover",
    category: "Pullover",
    description: "Warmer Rollkragenpullover aus hochwertiger Wolle.",
    materials: "Merinowolle, Kaschmir",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1609107893392-30508bdd1726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Kapuzenpullover mit Kordelzug",
    category: "Pullover",
    description: "Bequemer Pullover mit verstellbarem Kordelzug an der Kapuze.",
    materials: "Baumwolle, Polyester",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1617036095986-61d6d6d06a72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 16,
  },
  {
    name: "Basic-Strickpullover",
    category: "Pullover",
    description: "Einfacher, handgestrickter Pullover für jede Gelegenheit.",
    materials: "Baumwolle, Wolle",
    price: 34.99,
    image:
      "https://plus.unsplash.com/premium_photo-1695339146296-ab03c0e6ae50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 25,
  },
  {
    name: "Fleece-Pullover",
    category: "Pullover",
    description: "Weicher Fleece-Pullover für zusätzliche Wärme.",
    materials: "Polyester, Baumwolle",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1523251654373-00615b266166?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 30,
  },
  {
    name: "Striped Pullover",
    category: "Pullover",
    description: "Handgestrickter Pullover mit stilvollen Streifen.",
    materials: "Wolle, Baumwolle",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1511521813058-63a19d5d3559?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
  },

  // Handgemacht Cardigans (10 produse)
  {
    name: "Handgemachter Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter, handgemachter Cardigan für jede Jahreszeit.",
    materials: "Baumwolle, Wolle",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1633438584121-ec60a7d453d2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "Oversize Cardigan",
    category: "Handgemacht Cardigans",
    description: "Großzügig geschnittener Cardigan für einen modernen Look.",
    materials: "Acryl, Baumwolle",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1512909304358-dcb0bed0fcdd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Strick-Cardigan mit Knöpfen",
    category: "Handgemacht Cardigans",
    description: "Handgestrickter Cardigan mit dekorativen Knöpfen.",
    materials: "Wolle, Baumwolle",
    price: 89.99,
    image:
      "https://plus.unsplash.com/premium_photo-1698305282759-0d295cbb96d6?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Falten Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter Cardigan mit Falten für einen stilvollen Auftritt.",
    materials: "Leinen, Baumwolle",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1527424803383-098895227b9f?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    name: "Geflochtener Cardigan",
    category: "Handgemacht Cardigans",
    description: "Handgefertigter Cardigan mit geflochtenen Details.",
    materials: "Wolle, Baumwolle",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1586216583645-bf798306a3d7?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
  },
  {
    name: "V-Ausschnitt Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit V-Ausschnitt für einen femininen Look.",
    materials: "Baumwolle, Wolle",
    price: 84.99,
    image:
      "https://plus.unsplash.com/premium_photo-1674718917053-237c70e4a760?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 11,
  },
  {
    name: "Knopfloser Cardigan",
    category: "Handgemacht Cardigans",
    description: "Minimalistischer, handgemachter Cardigan ohne Knöpfe.",
    materials: "Acryl, Baumwolle",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1606915634445-ef81ad3709bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
  },
  {
    name: "Revers Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit reversen Taschen für zusätzlichen Stil.",
    materials: "Leinen, Baumwolle",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1590605049074-f1780f70b791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
  {
    name: "Lace Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter Cardigan mit Spitze für besondere Anlässe.",
    materials: "Spitze, Baumwolle",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1635656797814-2493a866105f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Striped Cardigan",
    category: "Handgemacht Cardigans",
    description: "Handgefertigter Cardigan mit stilvollen Streifen.",
    materials: "Wolle, Baumwolle",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1590605105526-5c08f63f89aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Cable Knit Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit klassischen Zopfmuster.",
    materials: "Wolle, Baumwolle",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1513091250092-b06c2b7981bc?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },

  // Genähte Kleider (10 produse)
  {
    name: "Handgenähtes Sommerkleid",
    category: "Genähte Kleider",
    description: "Leichtes, handgenähtes Sommerkleid mit Blumenmuster.",
    materials: "Baumwolle, Spitze",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Elegantes Abendkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Abendkleid mit funkelnden Details.",
    materials: "Seide, Perlen",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Lässiges Maxikleid",
    category: "Genähte Kleider",
    description: "Komfortables, handgenähtes Maxikleid für den Alltag.",
    materials: "Leinen, Baumwolle",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  {
    name: "A-Linien-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes A-Linien-Kleid mit eleganter Silhouette.",
    materials: "Baumwolle, Elastan",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "V-Ausschnitt Kleid",
    category: "Genähte Kleider",
    description: "Elegantes, handgenähtes Kleid mit V-Ausschnitt.",
    materials: "Seide, Spitze",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
  {
    name: "Midikleid mit Stickerei",
    category: "Genähte Kleider",
    description: "Handgenähtes Midikleid mit aufwendiger Stickerei.",
    materials: "Leinen, Baumwolle",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
  },
  {
    name: "Kurzärmeliges Sommerkleid",
    category: "Genähte Kleider",
    description: "Leichtes, handgenähtes Sommerkleid mit floralen Mustern.",
    materials: "Baumwolle, Leinen",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
  },
  {
    name: "Tierprint-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Kleid mit auffälligem Tierprint.",
    materials: "Baumwolle, Polyester",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    name: "Rollkragenkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Kleid mit stilvollem Rollkragen.",
    materials: "Wolle, Baumwolle",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Gemustertes Wickelkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Wickelkleid mit gemustertem Stoff.",
    materials: "Seide, Spitze",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Boho-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Boho-Kleid mit lockerer Passform.",
    materials: "Leinen, Baumwolle",
    price: 169.99,
    image:
      "https://images.unsplash.com/photo-1677947226918-7c783095d780?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },

  // Handgemacht Cardigans (10 produse)
  {
    name: "Handgemachter Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter, handgemachter Cardigan für jede Jahreszeit.",
    materials: "Baumwolle, Wolle",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "Oversize Cardigan",
    category: "Handgemacht Cardigans",
    description: "Großzügig geschnittener Cardigan für einen modernen Look.",
    materials: "Acryl, Baumwolle",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Strick-Cardigan mit Knöpfen",
    category: "Handgemacht Cardigans",
    description: "Handgestrickter Cardigan mit dekorativen Knöpfen.",
    materials: "Wolle, Baumwolle",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Falten Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter Cardigan mit Falten für einen stilvollen Auftritt.",
    materials: "Leinen, Baumwolle",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    name: "Geflochtener Cardigan",
    category: "Handgemacht Cardigans",
    description: "Handgefertigter Cardigan mit geflochtenen Details.",
    materials: "Wolle, Baumwolle",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
  },
  {
    name: "V-Ausschnitt Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit V-Ausschnitt für einen femininen Look.",
    materials: "Baumwolle, Wolle",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 11,
  },
  {
    name: "Knopfloser Cardigan",
    category: "Handgemacht Cardigans",
    description: "Minimalistischer, handgemachter Cardigan ohne Knöpfe.",
    materials: "Acryl, Baumwolle",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
  },
  {
    name: "Revers Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit reversen Taschen für zusätzlichen Stil.",
    materials: "Leinen, Baumwolle",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
  {
    name: "Lace Cardigan",
    category: "Handgemacht Cardigans",
    description: "Eleganter Cardigan mit Spitze für besondere Anlässe.",
    materials: "Spitze, Baumwolle",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Striped Cardigan",
    category: "Handgemacht Cardigans",
    description: "Handgefertigter Cardigan mit stilvollen Streifen.",
    materials: "Wolle, Baumwolle",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Cable Knit Cardigan",
    category: "Handgemacht Cardigans",
    description: "Cardigan mit klassischen Zopfmuster.",
    materials: "Wolle, Baumwolle",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1715176531842-7ffda4acdfa9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },

  // Genähte Kleider (10 produse)
  {
    name: "Handgenähtes Sommerkleid",
    category: "Genähte Kleider",
    description: "Leichtes, handgenähtes Sommerkleid mit Blumenmuster.",
    materials: "Baumwolle, Spitze",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Elegantes Abendkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Abendkleid mit funkelnden Details.",
    materials: "Seide, Perlen",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
  },
  {
    name: "Lässiges Maxikleid",
    category: "Genähte Kleider",
    description: "Komfortables, handgenähtes Maxikleid für den Alltag.",
    materials: "Leinen, Baumwolle",
    price: 139.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 15,
  },
  {
    name: "A-Linien-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes A-Linien-Kleid mit eleganter Silhouette.",
    materials: "Baumwolle, Elastan",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 12,
  },
  {
    name: "V-Ausschnitt Kleid",
    category: "Genähte Kleider",
    description: "Elegantes, handgenähtes Kleid mit V-Ausschnitt.",
    materials: "Seide, Spitze",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 7,
  },
  {
    name: "Midikleid mit Stickerei",
    category: "Genähte Kleider",
    description: "Handgenähtes Midikleid mit aufwendiger Stickerei.",
    materials: "Leinen, Baumwolle",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 9,
  },
  {
    name: "Kurzärmeliges Sommerkleid",
    category: "Genähte Kleider",
    description: "Leichtes, handgenähtes Sommerkleid mit floralen Mustern.",
    materials: "Baumwolle, Leinen",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 14,
  },
  {
    name: "Tierprint-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Kleid mit auffälligem Tierprint.",
    materials: "Baumwolle, Polyester",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 6,
  },
  {
    name: "Rollkragenkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Kleid mit stilvollem Rollkragen.",
    materials: "Wolle, Baumwolle",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 8,
  },
  {
    name: "Gemustertes Wickelkleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Wickelkleid mit gemustertem Stoff.",
    materials: "Seide, Spitze",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 10,
  },
  {
    name: "Boho-Kleid",
    category: "Genähte Kleider",
    description: "Handgenähtes Boho-Kleid mit lockerer Passform.",
    materials: "Leinen, Baumwolle",
    price: 169.99,
    image:
      "https://images.unsplash.com/photo-1642447411662-59ab77473a8d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 5,
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

seedDB();
