// making user schema
const mongoose=require("mongoose");

// userschema
const userSchem=mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    versionKey:false
})

//usermodal
const userModal=mongoose.model("users",userSchem)

// exporting userModal
module.exports={userModal}