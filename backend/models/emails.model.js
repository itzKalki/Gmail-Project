import mongoose, { Mongoose } from "mongoose";
const emailSchema=new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
},{timeStamps:true})
export const Email=mongoose.model("Email",emailSchema);