import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String
})

const StudentModel = mongoose.model("student", StudentSchema)
export default  StudentModel