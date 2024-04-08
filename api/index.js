const express=require("express")
const app=express();
const dotenv=require("dotenv")
const mongoose = require('mongoose');

dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MONGODB")).catch((err)=>{
    console.log(err);

})


console.log("inside running")

app.listen(5000,()=>{
    console.log("Backend starts running")
})

app.use('/',(req,res)=>{
    console.log("main pages")
})