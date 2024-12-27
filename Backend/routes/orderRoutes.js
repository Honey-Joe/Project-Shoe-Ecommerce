const express = require("express");
const orderRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const protect = require("../middleware/Auth");
const Order = require("../models/Order");
const User = require("../models/User");

orderRoute.post(
  "/",
  protect,
  AsyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingaddr,
      paymentmethod,
      paymentResult,
      price,
      taxprice,
      shippingprice,
      totalprice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No orders found");
    } else {
      const order = await Order({
        orderItems,
        shippingaddr,
        paymentmethod,
        paymentResult,
        taxprice,
        shippingprice,
        totalprice,
        price,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.json(createdOrder);
      res.status(200);
    }
  })
);

module.exports = orderRoute;
