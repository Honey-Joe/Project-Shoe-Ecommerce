const express = require("express");
const userRoutes = express.Router();
const User = require("../models/User");
const AsyncHandler = require("express-async-handler");


userRoutes.post("/login", AsyncHandler(async(req,res)=>{
    const {email ,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchpassword(password))){
        res.json({
            _id:user._id,
            name: user.name,
            email:user.email,
            password:user.password,
            isadmin: user.isadmin,
            token: null,
        })

    }else{
        res.status(401);
        throw new Error ("Invalid email or password");
    }

}))

userRoutes.post("/", AsyncHandler(async(req, res)=>{
    const {name, email, password} = req.body;
    const userexist =await User.findOne({email});
    if(userexist){
        res.status(400);
        throw new Error("User Already Exist");
    }
    else{
        const user = await User.create({
            name,
            email,
            password
        });
        if(user){
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                isAdmin:user.isadmin,
                createdAt: user.createdAt
            })
        }else{
            res.status(400);
            throw new Error("User data Invalid");
        }
    }
}))

module.exports = userRoutes;