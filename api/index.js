const express=require("express")
const app=express();
const dotenv=require("dotenv")
const mongoose = require('mongoose');
const authRoute=require("../api/routes/auth")
dotenv.config();
app.use(express.json());

app.use("/api/auth",authRoute);

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