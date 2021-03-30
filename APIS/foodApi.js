//mini express
const exp=require("express")

const foodApiObj=exp.Router()



//import express-async-handler
const errorhandler=require("express-async-handler")



//import user model
const Food=require("../models/food")

//payload data
foodApiObj.use(exp.json())

//dotenv
require("dotenv").config()

//imports
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")


//configure cloudinary
cloudinary.config({
    cloud_name:'dfvlzx25y',
    api_key:'588248481581757',
    api_secret: 'zA-wqIYvdxM_r7k2HYsWLp19nq4' 
 });

//cofigure cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:async (req, file) => {
    return {
    folder: 'ecommercefolder', 
    public_id: file.fieldname + '-' + Date.now()
    }},
   });

//configure multer
var upload = multer({ storage: storage })

//create food

foodApiObj.post("/createfood",upload.single('photo'),errorhandler(async (req,res)=>{

 //the req.body.foodObj is in JSON,so convert to object
 req.body=JSON.parse(req.body.foodObj)
 req.body.photo=req.file.path;

console.log(req.body)

    
    let foodObjtoModel=new Food({

        restname:req.body.restname,
        RestaurentID:req.body.RestaurentID,
        foodtype:req.body.foodtype,
        fooditemname:req.body.fooditemname,
        Price:req.body.Price,
        photo:req.body.photo


    })

    if(await Food.findOne({restname:req.body.restname, fooditemname:req.body.fooditemname,})==null){
        await foodObjtoModel.save()

        res.send({message:"Food item added successfully"})
    }
    else{
        res.send({message:"Already existed...."})
    }

}))

foodApiObj.get("/getFoodItems", errorhandler(async(req,res)=>{
    let foodArray=await Food.find()
    res.send({message:foodArray})
}))



//export api to server
module.exports=foodApiObj