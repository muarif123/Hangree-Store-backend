const mongoose=require("mongoose")

const connection=()=>{
    var res=mongoose.connect(process.env.URL)
    if(res){
        console.log("Db connected")
    }
}

module.exports=connection