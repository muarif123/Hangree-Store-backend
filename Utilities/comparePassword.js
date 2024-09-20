const bcrypt=require("bcrypt")

const comparePassword=async(password,dbpassword)=>{
    return await bcrypt.compare(password,dbpassword)
}

module.exports=comparePassword