const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockCount: { type: Number, required: true },
  imgURL: { type: String, required: true },
  tag: [String],
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
