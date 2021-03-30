const mongoose=require("mongoose")
const FoodSchema=new mongoose.Schema({
        restname:String,
        RestaurentID:Number,
        foodtype:String,
        fooditemname:String,
        Price:String,
        photo:String
})
const Food=mongoose.model("food",FoodSchema)
module.exports=Food