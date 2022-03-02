import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    id:Number,
    fullName:String,
    username:String,
    title:String,
    email:String,
    phoneNumber:String,
    dateofBirth:{
        type:Date,
        default:new Date()
    },
    shortSummary:String,
    summary:String,
    image:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
    qrCode:String,
    githubLink:String
});

const Person = mongoose.model("Person", personSchema);

export default Person;