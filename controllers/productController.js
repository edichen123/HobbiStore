// all fetching etc.
const Product = require("../models/ProductsModel");

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "not ok", message: error.message });
  }
};
const productById = async (req, res) => {
  try {
    const product = await Product.find(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "not ok", message: error.message });
  }
};

module.exports = {
  allProducts,
  productById
}