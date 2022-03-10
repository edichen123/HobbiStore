const express = require("express");
const router = express.Router();
const PRODUCT = require("../models/ProductsModel");
const {
  verificationToken,
  verifyAndAuthenticate,
  verifyAndAuthenticateAdmin,
} = require("./VerificationToken");

// create 
router.post("/", verifyAndAuthenticateAdmin, async (req, res) => {
  const newProduct = new PRODUCT(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    const updatedProduct = await PRODUCT.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", verifyAndAuthenticateAdmin, async (req, res) => {
  try {
    await PRODUCT.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Product");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await PRODUCT.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all product
router.get("/", async (req, res) => {
  const newQuery = req.query.new;
  const categoryQuery = req.query.category;
  try {
    let products;

    if (newQuery) {
      products = await PRODUCT.find().sort().limit(5);
    } else if (categoryQuery) {
      products = await PRODUCT.find({
        cat: {
          $in: [categoryQuery],
        },
      });
    } else {
      products = await PRODUCT.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
