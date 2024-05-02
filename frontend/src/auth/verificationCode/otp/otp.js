import React, { useState } from 'react';
import { OTPInputComponent } from '../autoFillOtp/index';
import './otp.scss';

export default function Otp() {
    const [otps ,setOtp] = useState("")
  return (
    <div className='mainOtp'>
      <OTPInputComponent 
                isNumberInput
                autoFocus
                length={4}
                value={otps?.OTP}
                className="otpContainer"
                inputClassName="input_item"
                onChangeOTP={(otp) => setOtp({ ...otps, OTP: otp })} />
    </div>
  )
}
