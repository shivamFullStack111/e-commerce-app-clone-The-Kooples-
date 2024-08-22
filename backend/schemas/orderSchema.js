const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cart:Array,
  shippingcharges:Number,
  discount:Number,
  user:Object,
  paymentMethod:String,
  status:String
})

const Orders = mongoose.model('Orders',orderSchema)

module.exports = Orders