const productSchema = require("../Models/productSchema")
const userSchema = require("../Models/userSchema")
const ApiResponse = require("../Utilities/ApiResponse")

const productadd=async(req,res)=>{

    console.log(req.body,"product object controller")
    await productSchema.create(req.body)
    res.send(new ApiResponse("success","Product added successfully"))
}


const getCollection=async(req,res)=>{
    const data=await productSchema.find()
    // console.log(data,"backend deata")
    res.send(new ApiResponse("success","Product deleted successfully",{array:data}))
}

const getSingleProduct=async(req,res)=>{
    console.log(req.body,"Body jjjjjjjjjjjjjjj")
    const product=await productSchema.findOne({_id:req.body.id})
    res.send(new ApiResponse("success","Data fetched successfully",{object:product}))
}

const updateProduct=async(req,res)=>{
    // console.log(req.body,"update object body")
    const data=await productSchema.findOneAndUpdate({_id:req.body.id},{$set:req.body.obj},{new:true})
    res.send(new ApiResponse("success","Product updated successfully"))
    // console.log(data,"updated")
}

const dashboardDeleteProduct=async(req,res)=>{
    await productSchema.findOneAndDelete({_id:req.body._id})
    // console.log(req.body,"dashboardDeleteProduct")
    // const allProducts=await productSchema.find()
    res.send(new ApiResponse("success","Product deleted successfully",))
}

const getAllUsers=async(req,res)=>{
    const data=await userSchema.find()
    res.send(new ApiResponse("success","User Fetched successfully",{array:data}))
}

const deleteDashboardUser=async(req,res)=>{
    console.log(req.body,"deleteDashboardUser")
    await userSchema.findOneAndDelete({_id:req.body.id})
    res.send(new ApiResponse("success","User deleted successfully"))
}

module.exports={productadd,getCollection,getSingleProduct,updateProduct,dashboardDeleteProduct,getAllUsers,deleteDashboardUser}