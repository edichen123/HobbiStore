const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productID: {
          type: String,
        },
        qty: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
