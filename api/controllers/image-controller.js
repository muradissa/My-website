import Image from "../models/Image";
import bcrypt from 'bcryptjs';
// import fs from "fs ";
import fs from "fs";


export const getImage = async (req,res,next) =>{
    const imageNum = req.params.id;
    let image;
    try{
        image = await Image.find({"num": imageNum});
    }catch(err){
        console.log(err)
    }
    if(!image){
        return res.status(404).json({message:"No Image found !"});
    }
    return res.status(200).json({image})
    // Image.find({}, (err, items) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(500).send('An error occurred', err);
    //     }
    //     else {
    //         res.render('imagesPage', { items: items });
    //     }
    // });
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

    // const image1 = cv.imread('C:\Users\Gamer\Desktop\Projects\my website\api\controllers\installanchor.jpg');
    // const str = image1.toString('base64');
    // const buffer = Buffer.from(str,'base64');
    const promise = fs.promises.readFile(('installanchor.jpg'));
    let buffer1 ; 
    await Promise.resolve(promise).then(function(buffer){
        console.log(buffer);
        buffer1 =buffer;
    });
    console.log(buffer1)
    // console
    const buf = buffer1;
    const imageSave = new Image({
        num, 
        name,
        image: {
            data:buffer1,
            contentType: 'image/jpg'
        },
    //    buf:{buf} 
    });

   try {
        imageSave.save();
   } catch (err) {
        return console.log(err);
   }
   return res.status(201).json({imageSave});
 }

