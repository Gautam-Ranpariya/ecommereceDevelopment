const { userModel } = require("../models/index.model")
const { otpModel } = require("../models/index.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//get all usera
const getAllUsers = async (req, res) => {
    const users = await userModel.find({})
    return res.json({
        msg: "All users",
        users
    })
}
//already user cheak user 
const alreadyuser  = async (req,res)=>{
    try {
        let {email} =  req.body

    let user = await userModel.find({email:email})
    console.log(user);
    if (user) {
       return res.status(200).json({
        msg : "already user",
        newUser : false
       }) 
    }
    return res.status(200).json({
        msg : "new user",
        newUser : true
       }) 
    } catch (error) {
        return res.json({
            msg: "already api chek errror",
            error
        })
    }
    
}
//singup 
const singupUser = async (req, res) => {
    try {
        let { email, username, password, otp,phonenumber} = req.body
        password = await bcrypt.hash(password, 10)
        let user = await userModel.findOne({ email: email }).lean()
        if (user) {
            delete user.password
            return res.json({
                msg: "already you have a account",
                user
            })
        }

        const chekOtp = await otpModel.findOne({ email: email })
        console.log("🚀 ~ singupUser ~ chekOtp:", chekOtp)
        if (!chekOtp) {
            return res.json({
                msg : "otp is reqired"
            })
        }
        if (otp != chekOtp.otp) {
            return res.json({
                msg: "otp wrong"
            })
        }
        let userNewuser = await userModel.create({ email: email, password: password, username: username,phonenumber:phonenumber })
        return res.json({
            msg: "new add user",
            userNewuser
        })

    }
    catch (error) {
        return res.json({
            msg: "sing faild errror",
            error
        })
    }
}
//login 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        let user = await userModel.findOne({ email: email })
        if (!user) {
            return res.json({
                msg: "you dont have a account plz sing up"
            })
        }
        const chekPassword = await bcrypt.compare(password, user.password)
        if (!chekPassword) {
            return res.json({
                msg: "wrong password"
            })
        }
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const data = { _id: user._id }
        const token = jwt.sign(data, jwtSecretKey, { expiresIn: '24h' })
        user = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { token: token } }, { new: true })
        return res.json({
            msg: "user login",
            user,
            token
        })
    } catch (error) {
        console.log(error);
    }
}
//chenge password
const changePassword = async (req, res) => {
    try {
        let { oldPassword, newPassword } = req.body
        let user = req.user
        if (!user) {
            return res.json({
                msg: "user not found"
            })
        }
        const chekPassword = await bcrypt.compare(oldPassword, user.password)
        if (!chekPassword) {
            return res.json({
                msg: "old password wrong Enter your old passwrod"
            })
        }
        newPassword = await bcrypt.hash(newPassword, 10)
        user = await userModel.findOneAndUpdate({ _id: user._id }, { $set: { password: newPassword } })
        return res.json({
            msg: "change password successfully",
            username: user.username

        })

    } catch (error) {
        console.log(error);
    }
}
//forget password 
const forgetPassword = async (req, res) => {
    try {
        let { email, otp, newPassword } = req.body
        let user = await userModel.findOne({ email: email })
        if (!user) {
            return res.json({
                msg: "you have not a account",
                email
            })
        }

        const chekOtp = await otpModel.findOne({ email: email })

        if (otp != chekOtp.otp) {
            return res.json({
                msg: "otp wrong"
            })
        }
        newPassword = await bcrypt.hash(newPassword, 10)
        user = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { password: newPassword } })
        return res.json({
            msg: "forget password successfully"
        })

    }
    catch (error) {
        return res.json({
            msg: "sing faild errror",
            error
        })
        //  console.log(error);
    }
}
//profile update
const profileUpdate = async (req, res) => {
    try {
        let { profile, phoneNumber, username } = req.body
        let user = req.user
        user = await userModel.findOne({ _id: user._id })
        if (profile) {
            user = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { profile: profile } },{new : true})
        }
        if (phoneNumber) {
            user = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { phoneNumber: phoneNumber } },{new : true})
        } 
        if (username) {
            user = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { username: username }},{new : true})
        }

        return res.json({
            msg: "profile successfully update",
            user
        })

    }
    catch (error) {
        return res.json({
            msg: "profile upadate fail",
            error
        })
        //  console.log(error);
    }
}
module.exports = {
    getAllUsers,
    alreadyuser,
    singupUser,
    loginUser,
    changePassword,
    forgetPassword,
    profileUpdate
}