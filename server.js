//express
const exp=require("express")

const app=exp()
//dotenv
require("dotenv").config()
const port=process.env.PORT

//path
const path=require("path")

//connect app
app.use(exp.static(path.join(__dirname,'dist/ClickToEat')))

//import userapi
const userApiObj=require("./APIS/userApi")
const adminApiObj=require("./APIS/adminApi")
const foodApiObj=require("./APIS/foodApi")

app.use("/user",userApiObj)
app.use("/admin",adminApiObj)
app.use("/food",foodApiObj)

//mongoose
const mongoose=require("mongoose")

//connect to db
mongoose.connect(process.env.DBURL,{useNewUrlParser:true, useUnifiedTopology:true});

const database=mongoose.connection;

database.once('open',()=>{
    console.log("connected to Database")
})

database.on('error',()=>{
    console.log("Error in connecting database")
})

//middleware to deal with invalid paths
app.use((req,res,next)=>{res.send({message:req.url+" is not a valid path"})
})   

//error handler middleware
app.use((err,req,res,next)=>{res.send({message:err.message})})  

//port number
app.listen(port,()=>{
    console.log(`server started on ${port}`)
})