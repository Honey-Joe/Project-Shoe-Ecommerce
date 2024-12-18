const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const router = require("./databaseSeeder");
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi");
});



mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("db connected");
});

app.use("/api/users", userRoutes);
app.use("/api/seed",router)
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log("server running on ", PORT);
});


