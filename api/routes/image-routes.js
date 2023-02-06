import express from 'express';
import {getImage,saveImage} from "../controllers/image-controller" ;

const router = express.Router();

router.get("/:id",getImage);
router.post("/saveimage",saveImage);


export default router;