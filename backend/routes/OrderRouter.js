const express = require("express");
const Orders = require("../schemas/orderSchema");

const router = express.Router();

router.post("/create-order", async (req, res) => {
  console.log(req.body);
try {
  const neworder = await new Orders({ ...req.body.order, status: "pending" }).save();
  return res.send({ success: true, message: "order created successfully" });
} catch (error) {
  console.log(error.message);
  return res.send({ success: false, message: error.message });
}
});

router.get('/get-all-orders',async(req,res)=>{
  try {
    const orders = await Orders.find()
    return res.send({success:true,orders})
  } catch (error) {
    
  }
})

module.exports = router;
