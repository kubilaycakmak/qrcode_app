import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    id:Number,
    firstName:String,
    lastName:String,
    username:String,
    age:Number,
    phoneNumber:Number,
    dateofBirth:{
        type:Date,
        default:new Date()
    },
    shortSummary:String,
    summary:String,
    education:Array,
    experience:Array,
    referance:Array,
    createdAt:{
        type:Date,
        default: new Date()
    }
});

const Person = mongoose.model("Person", personSchema);

export default Person;