import express from 'express';
import {getAllProjects,addProject,updateProject,getProjectbyId,deleteProjectbyId,getByUserId,getProjectbyNumber,getAllProjects2} from "../controllers/project-controller" ;

const projectRouter = express.Router();

projectRouter.get("/",getAllProjects);
projectRouter.post("/add",addProject);
projectRouter.put("/update/:id",updateProject);
projectRouter.get("/:id",getProjectbyId);
projectRouter.delete("/:id",deleteProjectbyId);
projectRouter.get("/user/:id",getByUserId);
projectRouter.get("/projectnumber/:id",getProjectbyNumber)
projectRouter.get("/getallprojects",getAllProjects2);
export default projectRouter;