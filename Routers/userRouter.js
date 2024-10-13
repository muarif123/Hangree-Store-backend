const express=require("express")
const { signupController, signinController, changingPassword, tokenController } = require("../Controllers/userControllers")
const checkLogged = require("../Middlewares/isLogged")
const router=express.Router()

router.post("/signupdata",signupController)
router.post("/signindata",signinController)
router.post("/changePassword",checkLogged,changingPassword)
router.post("/checkLogin",checkLogged)


module.exports=router