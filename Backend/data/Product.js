const mongoose = require("mongoose");
const sampleData = [
  {
    name: "Product 1",
    image: "https://example.com/images/product1.jpg",
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
    image: "https://example.com/images/product2.jpg",
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
    image: "https://example.com/images/product3.jpg",
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
    image: "https://example.com/images/product4.jpg",
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
    image: "https://example.com/images/product5.jpg",
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
    image: "https://example.com/images/product6.jpg",
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
    image: "https://example.com/images/product7.jpg",
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
    image: "https://example.com/images/product8.jpg",
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
    image: "https://example.com/images/product9.jpg",
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
    image: "https://example.com/images/product10.jpg",
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
