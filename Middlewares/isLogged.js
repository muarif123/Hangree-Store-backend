const userSchema = require("../Models/userSchema")
const ApiResponse = require("../Utilities/ApiResponse")
const jwt = require("jsonwebtoken")


const checkLogged = async (req, res, next) => {
    console.log(req.headers.authorization?.split(" ")[1], "kkkkkkkkkkkkkk")
    const token = req.headers.authorization?.split(" ")[1]
    console.log(token, "authorization")

    if (!token) {
        return res.send(new ApiResponse("error", "Please login first"))
        console.log("please login first")
    }

    let verifyToken;
    try {
        verifyToken = jwt.verify(token, process.env.KEY)
        console.log(verifyToken, "verifyToken")

    } catch (err) {
        if(err){
            return res.send(new ApiResponse("error","Please login first"))
        }
    }

    if (!verifyToken || !verifyToken.id) {
        return res.send(new ApiResponse("error", "Please login again."));
    };

    const user = await userSchema.findOne({ _id: verifyToken.id })
    if (!user) {
        return res.send(new ApiResponse("error", "User not found"))
    } else {
        req.user = user
        next()
        return res.send(new ApiResponse("success"))
    }
}

module.exports = checkLogged