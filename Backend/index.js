const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("db connected");
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log("server running on ", PORT);
});


