const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    name:{
        type:String
    },
    category:{
        type:String
    },
    color:{
        type:String
    },
    date:{
        type:Date
    },
    images:{
        type:[String]
    }
})

module.exports=mongoose.model("product",productSchema)