// dependencies
require("dotenv").config();
const { urlencoded } = require("express");
const path = require("path");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
// Routes
const UserRoute = require("./routes/UserRoutes");
const AuthRoute = require("./routes/AuthRoute");
const ProductRoute = require("./routes/ProductRoutes");
const CartRoute = require("./routes/CartRoute");
const OrderRoute = require("./routes/OrderRoute");
const StripeRoute = require("./routes/StripeRoute");

//MongoDB
// const connectDB = require("./MongoDB/mongooseDB");
// connectDB();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

//config
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));
app.use(urlencoded({ extended: false }));

//middleware for routes
// app.use("/api/products", ProductRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);
app.use("/api/products", ProductRoute);
app.use("/api/cart", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/checkout", StripeRoute);

//routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

//listen
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
