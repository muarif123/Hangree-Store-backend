const express=require("express")
const cors=require("cors")
const app=express()
const connection=require("./Connection/connection")
const dotenv=require("dotenv")
dotenv.config({path:"./.env"})
const userRouter=require("./Routers/userRouter")

connection()
app.use(express.json())
app.use(cors())

app.use("/",userRouter)

app.post("/signupdata",async(req,res)=>{
    console.log(req.body,"Backend body")
})

app.get("/",(req,res)=>{
    res.send("Server running")
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})

