const express = require("express");
const userRoutes = express.Router();
const User = require("../models/User");
const AsyncHandler = require("express-async-handler");


userRoutes.post("/login", AsyncHandler(async(req,res)=>{
    const {email ,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user.id,
            name: user.name,
            email:user.email,
            password:user.password,
            isAdmin:user.isAdmin,
            token: null,
            createdAt: user.createdAt
        })

    }else{
        res.status(401);
        throw new Error ("Invalid email or password");
    }

}))

module.exports = userRoutes;