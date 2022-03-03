require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./MongoDB/mongooseDB");
const Product = require("./models/ProductsModel");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error("Error importing data");
    process.exit(1);
  }
};
importData();
