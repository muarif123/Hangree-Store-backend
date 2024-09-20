const userSchema = require("../Models/userSchema")
const ApiResponse = require("../Utilities/ApiResponse")
const comparePassword = require("../Utilities/comparePassword")
const createToken = require("../Utilities/createToken")
const hashPassword = require("../Utilities/encryptPassword")

const signupController = async (req, res) => {
    const bcrypted = await hashPassword(req.body.password)
    console.log(bcrypted, "bcrypted")
    req.body.password = bcrypted
    await userSchema.create(req.body)
    res.send(new ApiResponse("success", "Account created successfully"))
}


const signinController = async (req, res) => {
    console.log(req.body, "Signin backend")
    const existingUser = await userSchema.findOne({ email: req.body.email })
    console.log(existingUser, "existingUser")

    if (!existingUser) {
        return res.send(new ApiResponse("error", "Invalid Email"))
    }

    const matchedPassword = await comparePassword(req.body.password, existingUser.password)
    console.log(matchedPassword, "matchedPassword")

    if (matchedPassword) {
        const Token = createToken(existingUser._id)
        console.log(Token, "Token")
        res.send(new ApiResponse("success", "Login", { user: existingUser, token: Token }))
    } else {
        res.send(new ApiResponse("error", "Wrong Password"))
    }

}


const changingPassword = async (req, res) => {
    console.log(req.body, req.user, "ooooooooooooooooooooo")
    const matchedPassword = await comparePassword(req.body.oldPassword, req.user.password)
    if (!matchedPassword) {
        return res.send(new ApiResponse("error", "Old password incorrect"))
    }
    console.log(matchedPassword, "matchedPassword")
    const encodedPassword = await hashPassword(req.body.confirmPassword)
    console.log(encodedPassword, "encodedPassword")

    const updatePassword=await userSchema.findOneAndUpdate({ _id: req.user._id }, { $set: { password: encodedPassword } }, { new: true })
    if(updatePassword){
        res.send(new ApiResponse("success","Password updated successfully"))
    }else{
        res.send(new ApiResponse("error","Failed to update password"))
    }
}

module.exports = { signupController, signinController, changingPassword }