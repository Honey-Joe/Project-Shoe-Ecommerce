const mongoose = require("mongoose");
const sampleData = [
  {
    name: "Product 1",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe23_5444b0e6-72c7-450c-aab6-081a70660dcd_600x.jpg_v=1494316272?updatedAt=1733198634190",
    description: "Description for Product 1",
    rating: 4.5,
    numReview: 20,
    price: 29.99,
    countInStock: 50,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 5,
        comment: "Excellent product!",
        user: new mongoose.Types.ObjectId(),
      },
      {
        name: "Reviewer 2",
        rating: 4,
        comment: "Very good quality.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 2",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe26_de67b47c-8d95-481f-aa85-268cdc309e4e.jpg_v=1494314652?updatedAt=1733198633327",
    description: "Description for Product 2",
    rating: 3.8,
    numReview: 15,
    price: 19.99,
    countInStock: 30,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 4,
        comment: "Good value for money.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 3",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe25_2b59f812-76f2-448b-8835-d7ad151027e4_600x.jpg_v=1494315511?updatedAt=1733198632269",
    description: "Description for Product 3",
    rating: 4.2,
    numReview: 25,
    price: 49.99,
    countInStock: 20,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 4,
        comment: "Nice features.",
        user: new mongoose.Types.ObjectId(),
      },
      {
        name: "Reviewer 2",
        rating: 5,
        comment: "Loved it!",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 4",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe22_48464579-a7fe-40ba-ad66-8c6aa7ef2bb1.jpg_v=1494315721?updatedAt=1733198580161",
    description: "Description for Product 4",
    rating: 4.0,
    numReview: 10,
    price: 39.99,
    countInStock: 15,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 4,
        comment: "Good product.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 5",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe21.jpg_v=1494317531?updatedAt=1733198493995",
    description: "Description for Product 5",
    rating: 3.5,
    numReview: 18,
    price: 14.99,
    countInStock: 40,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 3,
        comment: "Average product.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 6",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe21.jpg_v=1494317531?updatedAt=1733198493995",
    description: "Description for Product 6",
    rating: 4.7,
    numReview: 22,
    price: 59.99,
    countInStock: 25,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 5,
        comment: "Highly recommend!",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 7",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe12_600x.jpg_v=1494314503?updatedAt=1733198459420",
    description: "Description for Product 7",
    rating: 3.9,
    numReview: 12,
    price: 24.99,
    countInStock: 10,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 4,
        comment: "Worth the price.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 8",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe11.jpg_v=1494314260?updatedAt=1733198458528",
    description: "Description for Product 8",
    rating: 4.3,
    numReview: 30,
    price: 34.99,
    countInStock: 35,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 5,
        comment: "Very impressive!",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 9",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe7_600x.jpg_v=1494314486?updatedAt=1733198410596",
    description: "Description for Product 9",
    rating: 2.8,
    numReview: 8,
    price: 9.99,
    countInStock: 50,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 2,
        comment: "Not great quality.",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
  {
    name: "Product 10",
    image: "https://ik.imagekit.io/HoneyJoe/Shoe%20Ecommerce/shoe9_8a5e5186-31f5-47cb-a8cf-fecf2349bed7_600x.jpg_v=1494325511?updatedAt=1733198408219",
    description: "Description for Product 10",
    rating: 4.8,
    numReview: 45,
    price: 99.99,
    countInStock: 5,
    reviews: [
      {
        name: "Reviewer 1",
        rating: 5,
        comment: "Exceptional quality!",
        user: new mongoose.Types.ObjectId(),
      },
    ],
  },
];

module.exports = sampleData;
