const express = require("express");
const router = express.Router();

const {
  allProducts,
  productById,
} = require("../controllers/productController");

// get all products from DB
router.get("/", (allProducts) => {});

// get 1 product from DB by :id
router.get("/:id", (productById) => {});

module.exports = router;
