const jwt=require("jsonwebtoken")

const createToken=(id)=>{
    return jwt.sign({id:id},process.env.KEY,({expiresIn:"2d"}))
}

module.exports=createToken