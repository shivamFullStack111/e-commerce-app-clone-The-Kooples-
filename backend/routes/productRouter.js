const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadfile } = require("../utils/upload");
const Products = require("../schemas/productSchema");
const stripe = require("stripe")(
  "sk_test_51Oue7VSDIZObshIBxoJKYFWdrfJquUPmFdH8ue32noE1Z24il1e8pWVHkGDIcIHhxTmni2dQ5TXhbA4qKvN9OPcV00ijXxxPdw"
);

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 50000000 },
});

router.post("/create-product", uploader.array("file"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      throw new Error("No files uploaded");
    }
    let images = [];

    const uploadedFiles = await Promise.all(
      req.files.map((file) => uploadfile(file.path))
    );
    uploadedFiles.map((file) => images.push(file.secure_url));
    console.log("Uploaded files:", uploadedFiles);

    req.body.images = images;

    const newproduct = await new Products(req.body).save();

    console.log(newproduct);

    return res.send({
      success: true,
      message: "new product created successfully",
    });
  } catch (error) {
    console.error("Error in route handler:", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
});

router.get("/get-all-products", async (req, res) => {
  try {
    const products = await Products.find();
    return res.send({ success: true, products: products });
  } catch (error) {
    return { success: false, message: error.message };
  }
});

router.post("/process-payment", async (req, res) => {
  try {
    const myPayment = await stripe.paymentIntents.create({
      currency: "INR",
      amount: 2000,
      description: "new payment testing",
      shipping: {
        name: "t-shirt",
        address: {
          line1: "fr",
          city: "jalandhar",
          postal_code: 144001,
          state: "punjab",
          country: "india",
        },
      },
      payment_method_types: ["card"],
    });

    return res.send({ success: true, client_secret: myPayment.client_secret });
  } catch (error) {
    console.log("stripe :-", error.message);
  }
});

router.get("/get-public-key", async (req, res) => {
  try {
    const publickey =
      "pk_test_51Oue7VSDIZObshIBFM9LBELpI0xQTCv2cf3CwFOiQSTiwZGJznqZZ3z975r3aM6VE56NnmKR16LiR1Ry3Gowfte0009yL0spli";

    return res.send({ success: true, key: publickey });
  } catch (error) {}
});

router.get("/get-all-products", async (req, res) => {
  try {
    const products = await Products.find();
    return res.send({ success: true, products });
  } catch (error) {
    console.log(error.message);
    return res.send({ success: false, message: error.message });
  }
});

router.post("/update-product", async (req, res) => {
  try {
    const { data, id } = req.body;
    const {
      title,
      price,
      stock,
      gender,
      colors,
      description,
      clothdetail,
      category,
    } = data;
    const product = await Products.findOne({ _id: id });
    console.log(product);
    if (!product)
      return res.send({ success: false, message: "Product not found" });

    product.title = title;
    product.price = price;
    product.stock = stock;
    product.gender = gender;
    product.colors = colors;
    product.description = description;
    product.clothdetail = clothdetail;
    product.category = category;

    await product.save();
    return res.send({ success: true, message: "Product updated successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

router.delete("/delete-product/:productid", async (req, res) => {
  try {
    await Products.findByIdAndDelete({ _id: req.params.productid });
    return res.send({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});
module.exports = router;
