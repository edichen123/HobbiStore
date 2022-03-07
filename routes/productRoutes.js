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
    res.status(500).json(error)
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

module.exports = router;
