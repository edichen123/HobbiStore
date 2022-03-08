const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stockCount: { type: Number, required: true },
    imgURL: { type: String, required: true },
    category: { type: Array },
    size: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
