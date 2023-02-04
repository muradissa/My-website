import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    num:{
        type : String,
        required: true,
        unique: true
    },
    title : {
        type : String,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    }
    ,skills:[{type:String,required:true}],
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    githublink:{
        type:String,
        required: true,
    }
});

export default mongoose.model("Project",projectSchema)