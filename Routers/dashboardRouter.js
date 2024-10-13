const express=require("express")
const {productadd, getCollection,getSingleProduct, updateProduct,dashboardDeleteProduct, getAllUsers, deleteDashboardUser} = require("../Controllers/dashboardControllers")
const router=express.Router()

router.post("/addproduct",productadd)
router.get("/getcollection",getCollection)
router.post("/getUpdateProduct",getSingleProduct)
router.post("/updateProduct",updateProduct)
router.post("/dashboardDeleteProduct",dashboardDeleteProduct)
router.get("/getallusers",getAllUsers)
router.post("/deleteDashboardUser",deleteDashboardUser)

module.exports=router