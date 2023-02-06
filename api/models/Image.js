import mongoose from "mongoose";


const Schema = mongoose.Schema;

const imageSchema = new Schema({
    num:{
        type : String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required: true
    },
    image:{
        // type:String,
        // required: true,
        data:Buffer,
        contentType: String,
    } ,
    // buf:{
    //     type:Buffer,
    //     required:true
    // }
});

export default mongoose.model("Image",imageSchema)