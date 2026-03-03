const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/EcommerceDemo")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
  
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));