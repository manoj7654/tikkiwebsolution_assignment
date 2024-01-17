const express=require("express");

const app=express();


const {connection}=require("./config/db");
require("dotenv").config()

const morgan = require('morgan');
const { userRouter } = require("./routes/userRouter");
app.use(morgan('dev'));
app.use(express.json());



app.use("/users",userRouter)



 


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Database connected")
    } catch (error) {
        console.log("Getting error while connecting database")
    }

    console.log(`Server is running on port no ${process.env.port}`)
})