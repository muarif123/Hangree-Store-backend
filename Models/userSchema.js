const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    }
})

module.exports=mongoose.model("User",userSchema)