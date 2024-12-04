const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {type: String , required: true},
    email: {type: String, required: true, unique:true},
    password : {type:String, required: true},
    isadmin:{type: Boolean, default:false},
},
{timestamps: true},
);
userSchema.methods.matchPassword = async (enterPassword)=>{
    return await bcrypt.compare(enterPassword,this.password);
}

module.exports = mongoose.model("User", userSchema);