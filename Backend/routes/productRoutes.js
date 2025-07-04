const express = require("express");
const AsyncHandler = require("express-async-handler");
const Product = require("../models/Product");
const productRoutes = express.Router();

productRoutes.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoutes.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

module.exports = productRoutes;
