const express = require("express");
const Users = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  checkauthentication,
} = require("../middleware/authenticatedMiddleware");
const router = express.Router();
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/register", async (req, res) => {
  try {
    const isexist = await Users.findOne({ email: req.body.email });
    if (isexist)
      return res.send({ success: false, message: "user already registered" });

    const hashpassword = await bcrypt.hash(req.body.password, 10);

    const token = await jwt.sign({ user: req.body }, SECRET_KEY, {
      expiresIn: "30d",
    });

    const newuser = await new Users({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashpassword,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      phonenumber: req.body.phonenumber,
    }).save();

    return res.send({
      success: true,
      message: "registration successful",
      token,
      user: newuser,
    });
  } catch (error) {
    console.log(error.message);
    return res.send({ success: false, message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const isexist = await Users.findOne({ email: req.body.email });

    if (!isexist)
      return res.send({ success: false, message: "user not registered" });

    const iscorrect = await bcrypt.compare(req.body.password, isexist.password);

    if (!iscorrect)
      return res.send({ success: false, message: "wrong password" });

    const token = await jwt.sign({ user: isexist }, SECRET_KEY, {
      expiresIn: "30d",
    });

    return res.send({
      success: true,
      message: "login successful",
      token,
      user: isexist,
    });
  } catch (error) {
    console.log(error.message);
    return res.send({ success: false, message: error.message });
  }
});

router.get("/isauthenticated", checkauthentication, async (req, res) => {
  try {
    if (req.error) return res.send({ success: false, message: req.error });

    const user = await Users.findOne({ email: req.user.email });

    if (!user)
      return res.send({ success: false, message: "user not registered" });

    return res.send({ success: true, message: "user found", user });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

router.post("/save-address", async (req, res) => {
  try {
    const {
      user,
      address,
      streetaddress,
      name,
      email,
      country,
      state,
      city,
      pincode,
      phonenumber,
      phonenumber2,
    } = req.body;

    console.log(req.body);

    const userr = await Users.findOne({ _id: user._id });

    if (!userr)
      return res.send({ success: false, message: "please login to continue" });

    userr.addressess = {
      address,
      streetaddress,
      name,
      email,
      country,
      state,
      city,
      pincode,
      phonenumber,
      phonenumber2,
    };

    await userr.save();

    return res.send({ success: true, message: "address updated successfully" });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

router.get("/get-all-users", async (req, res) => {
  try {
    const users = await Users.find();
    return res.send({ success: true, users });
  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
});

module.exports = router;
