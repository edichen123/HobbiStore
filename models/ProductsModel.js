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
    size: { type: String },
    cat: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
