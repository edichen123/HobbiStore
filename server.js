// dependencies
require("dotenv").config();
const { urlencoded } = require("express");
const path = require("path");
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const products = require("./data/products");

// Routes
const productRoute = require("./routes/productRoutes");

//MongoDB
const connectDB = require("./MongoDB/mongooseDB");
connectDB();

//config
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(methodOverride("_method"));
app.use(urlencoded({ extended: false }));

//middlewear for routes
app.use("/api/products", productRoute);

//routes
app.get("/:indexOfProductsArray", (req, res) => {
  const pos = req.params.indexOfProductsArray;
  res.send(products[pos]);
});

//listen
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
