const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
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
    amount: {type: Number, required : true},
    address: {type: Object, required: true},
    status: {type: String, default: "Pending"}
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
