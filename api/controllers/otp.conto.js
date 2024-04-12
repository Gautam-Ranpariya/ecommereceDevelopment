const { otpModel } = require("../models/index.model")
const { sendEmail } = require("../untils")

//send otp
const sendOtp = async (req, res) => {
    try {
        const { email } = req.body
        const otp = Math.floor(100000 + Math.random() * 900000)
        const html = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Dcode Infotech</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Dcode Infotech. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
          <p style="font-size:0.9em;">Regards,<br />Dcode Infotech</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Dcode Infotech</p>
            <p>302 Amphitheatre Parkway</p>
            <p>surat</p>
          </div>
        </div>
        </div>`
        user = await otpModel.findOne({ email: email })
        console.log("🚀 ~ sendOtp ~ user:", user)
        console.log(otp, email, "*******");
        if (user) {
            user = await otpModel.findByIdAndUpdate({ _id: user._id }, { $set: { otp: otp } }, { new: true })
            await sendEmail({ email, otp, html })
            console.log(user,"********");
            return res.status(200).json({
                user
            })
        }

        const newUser = await otpModel.create({ email: email, otp: otp })
        
        await sendEmail({ email, otp, html })
        console.log(newUser,"********");
        return res.status(200).json({
            newUser
        })
    } catch (error) {
        return res.json({
            msg: "otp api faild",
            error
        })
    }

}
//varified
const varifiedOtp = async (req, res) => {
    try {
        const { email, otp } = req.body
        console.log(email,otp  );
        user = await otpModel.findOne({ email: email })
        if (!user) {
            return res.status(404).json({
                msg: "user not found",
            })
        }
        if (user.otp != otp) {
            return res.status(404).json({
                msg: "wrong otp",
                varifiedOtp: false
            })
        }
        return res.status(404).json({
            msg: "user is varifiedOtp",
            varifiedOtp: true
        })
    } catch (error) {
        return res.json({
            msg: "varifiedOtp api faild",
            error
        })
    }

}


module.exports = {
    sendOtp,
    varifiedOtp
}