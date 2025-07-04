const express = require("express");
const userRoutes = express.Router();
const User = require("../models/User");
const AsyncHandler = require("express-async-handler");
const generateToken = require("../tokenGeneretor");
const protect = require("../middleware/Auth");

//login
userRoutes.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchpassword(password))) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isadmin: user.isadmin,
        createdAt: user.createdAt,
        token: generateToken(user.id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  })
);
//register routes
userRoutes.post(
  "/",
  AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userexist = await User.findOne({ email });
    if (userexist) {
      res.status(400);
      throw new Error("User Already Exist");
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      if (user) {
        res.status(201).json({
          data: user,
          message: "Registered",
        });
      } else {
        res.status(400);
        throw new Error("User data Invalid");
      }
    }
  })
);
//profile data
userRoutes.get(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isadmin: user.isadmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  })
);
//updated profile
userRoutes.put(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        password: updatedUser.password,
        isadmin: updatedUser.isadmin,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser.id),
      });
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  })
);

module.exports = userRoutes;
