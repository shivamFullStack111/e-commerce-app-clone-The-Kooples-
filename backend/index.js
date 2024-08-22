const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const path = require("path");
const orderRouter = require("./routes/OrderRouter");

try {
  mongoose.connect("mongodb://localhost:27017/muskandidi").then(() => {
    console.log("db connected");
  });
} catch (error) {
  console.log(error.message)
}

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

app.listen(8000, () => {
  console.log("port running on 8000");
});
