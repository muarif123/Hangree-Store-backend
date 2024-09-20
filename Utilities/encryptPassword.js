const bcrypt=require("bcrypt")

const hashPassword=async(password)=>{
    console.log(password,"utility password")
    return await bcrypt.hash(password,10)
}

module.exports=hashPassword