const jwt=require("jsonwebtoken")

const createToken=(id)=>{
    return jwt.sign({id:id},process.env.KEY,({expiresIn:"30m"}))
}

module.exports=createToken