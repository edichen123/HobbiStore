// dependencies
require("dotenv").config();
const { urlencoded } = require("express");
const path = require("path");
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");

// Controller Routes
const productController = require("./controllers/productController");

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
app.use("/api/products", productController);

//routes

//listen
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
