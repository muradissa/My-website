import Project from "../models/Project";
import User from "../models/User";
import mongoose from "mongoose";


export const getAllProjects = async (req,res,next) =>{
    let projects;
    try {
        projects = await Project.find();
    } catch (err) {
        return console.log(err);
    }
    if(!projects){
        return res.status(404).json({message:"Not projects Found"});
    }
    return res.status(200).json({Projects: projects});
}

export const addProject = async(req,res,next)=>{
    const {title,description,image,skills,user} = req.body;
    //const {title,description,image,skills,user} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to find the user by this userId"})
    }
    const number = (await (Project.count()) + 1 )+"" ;
    const project =new Project({
        number,
        title,
        description,
        image,
        skills,
        user,
    });
    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await project.save({session});
        existingUser.projects.push(project);
        await existingUser.save({session});
        await session.commitTransaction();
    }catch(err){
        console.log(err);
        return res.status(500).json({message : err})
    }
    return res.status(200).json({project});
}

export const updateProject = async (req,res,next)=>{
    const {title,description}= req.body;
    const projectId = req.params.id;
    let project;
    try {
        project = await Project.findByIdAndUpdate(projectId,{title,description});
    } catch (err) {
       return  console.log(err);
    }
    if(!project){
        return res.status(500).json({message:"Unable to update the project"});
    }
    return res.status(200).json({project: project});
}


export const getProjectbyId = async (req,res,next)=>{
    
    const projectId = req.params.id;
    let project;
    try {
        project = await Project.findById(projectId);
    } catch (err) {
       return  console.log(err);
    }
    if(!project){
        return res.status(500).json({message:"Unable to find the project"});
    }
    return res.status(200).json({data: project});

}

export const deleteProjectbyId = async(req,res,next) =>{
    const id = req.params.id;
    let project ;
    try{
        project = await Project.findByIdAndDelete(id).populate('user');
        await project.user.projects.pull(project);
        await project.user.save();
    }catch(err){
        return console.log(err);
    }
    if(!project){
        return res.status(400).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Successfully delete"});
}

export const getByUserId = async(req,res,next) =>{
    const userId = req.params.id;
    let userProjects ;
    try {
        userProjects = await User.findById(userId).populate("projects");
    } catch (err) {
        return console.log(err);
    }
    if(!userProjects){
        return res.status(404).json({message:"No project Found"});
    }
    return res.status(200).json({projects:userProjects});
}

export const getProjectbyNumber = async (req,res,next)=>{
    console.log("getProjectbyNumber");
    const projectNumber = req.params.id;
    let project;
    try {
        project = await Project.find({"number": projectNumber});
    } catch (err) {
       return  console.log(err);
    }
    if(!project){
        return res.status(500).json({message:"Unable to find the project"});
    }
    // res.data= project;
    // res.setHeader('Content-Type', 'application/json');


    // res.setHeader("X-Frame-Options", "ALLOWALL");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // if(projectNumber == 3){
    //     res.send(project)
    // }
    //res.send({message:"Unable to find the project"})
    res.send((project))
    //res.set('project', 'project');
    //return res.status(200).json({message:"Unable to find the project"});
    //return res.status(200).json({project:project});

}