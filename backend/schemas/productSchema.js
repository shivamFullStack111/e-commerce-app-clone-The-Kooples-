const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  gender: String,
  stock: Number,
  colors: Array,
  images: Array,
  description: String,
  clothdetail: String,
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
