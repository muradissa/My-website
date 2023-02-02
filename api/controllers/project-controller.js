import Project from "../models/Project";
import User from "../models/User";


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
    const {title,description,image,skills} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({message:"Unable to find the user by this userId"})
    }
    const project =new Project({
        title,
        description,
        image,
        skills
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
    return res.status(200).json({project: project});

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