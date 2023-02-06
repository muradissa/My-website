import Image from "../models/Image";
import bcrypt from 'bcryptjs';
import fs from "fs";


export const getImage = async (req,res,next) =>{
    const imageNum = req.params.id;
    console.log("imageNum : "+imageNum);
    let image;
    try{
        image = await Image.find({"num": imageNum});
    }catch(err){
        console.log(err)
    }
    if(!image){
        return res.status(404).json({message:"No Image found !"});
    }
    // return res.status(200).json({image})
    //console.log("base 74 "+image[0].image.data.toString('base64'))
    //var string = buffer.toString('base64');
    //res.send((image))
    res.send(image[0].image.data.toString('base64'))
}

export const saveImage = async (req,res,next) =>{

    const {num,name} = req.body;
    let existingImage ;
    try {
            existingImage = await Image.findOne({"num": num})
    }catch(err){
            return console.log(err);
    }

    if(existingImage){
        return res.status(400).json({message:"Image already exists !"});
    }
    const promise = fs.promises.readFile(('salsa 20.jpg'));
    let buffer1 ; 
    await Promise.resolve(promise).then(function(buffer){
        buffer1 =buffer;
    });
    console.log(buffer1)
    
    const buf = buffer1;
    const imageSave = new Image({
        num, 
        name,
        image: {
            data:buffer1,
            contentType: 'image/jpg'
        },
    });

   try {
        imageSave.save();
   } catch (err) {
        return console.log(err);
   }
   return res.status(201).json({imageSave});
 }

