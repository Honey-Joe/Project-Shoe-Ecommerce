const mongoose = require("mongoose");

const orderItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [orderItemsSchema],
    shippingaddr: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalcode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentmethod: { type: String, required: true },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      updatedItems: { type: String },
      email: { type: String },
    },
    taxprice: { type: Number, required: true, default: 0.0 },
    shippingprice: { type: Number, required: true, default: 0.0 },
    totalprice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDeliverd: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
