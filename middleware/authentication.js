const jwt=require("jsonwebtoken");
require("dotenv").config();
const authentication=async(req,res,next)=>{
   
        const token=req.headers.authorization;
        if(token){
         const decode=jwt.verify(token,process.env.secret_key)
         if(decode){
            const userId=decode.userId
            req.body.userId=userId
            next()
         }else{
            res.json({"message":"Please login again"})
         }
        }else{
            res.json({"message":"Please login first"})
        }
    } 

    module.exports={authentication}