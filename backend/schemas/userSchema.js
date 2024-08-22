const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  dateofbirth: Date,
  isadmin: {
    type: Boolean,
    default: false,
  },
  email: String,
  password: String,
  phonenumber: Number,
  gender: String,
  addressess: Array,
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
