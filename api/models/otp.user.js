
const {model,Schema} = require("mongoose")

const otpUser = new Schema({
    email : { type: String ,required: true},
    otp:{type : Number,default : null}
},{timestamps : true,versionKey :  false})

const otpModel =  model("otp",otpUser,"otp")

module.exports = otpModel