//init
require("dotenv").config();
const express = require("express");
const router = express.Router();
const Product = require("../models/ProductsModel");
const productsData = require("../data/products");

router.get("seed", async (req, res) => {
    const 
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(productsData);
    res.status(200).json({
      status: "ok",
      message: "seeded post images",
      data: { createdProducts },
    });
  } catch (error) {
    res.json({ status: "not ok", message: error.message });
  }
});

// Get All Products from DB
router.get("/", (req, res) => {});

// Get a Products from DB by :id
router.get("/:id", (req, res) => {});

module.exports = router;
