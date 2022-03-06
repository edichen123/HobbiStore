// dependencies
require("dotenv").config();
const { urlencoded } = require("express");
const path = require("path");
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
// const products = require("./data/products");
const UserRoute = require("./routes/UserRoutes");
const AuthRoute = require("./routes/AuthRoute");
// Routes
// const ProductRoute = require("./routes/ProductRoutes");

//MongoDB
const connectDB = require("./MongoDB/mongooseDB");
connectDB();

//config
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(methodOverride("_method"));
app.use(urlencoded({ extended: false }));

//middleware for routes
// app.use("/api/products", ProductRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

//routes

//listen
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
