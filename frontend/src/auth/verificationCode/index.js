import React from 'react'
import './verificationCode.scss';
import AuthDesktop from '../../assets/images/authDesktop.png';
import ModerateButton from '../../shared/components/moderateButton';
import authVerificationCode from '../../assets/images/auth-verificationCode.png';
import Otp from './otp/otp';
import { useSelector } from 'react-redux';

export default function VerificationCode() {

  const {loading} = useSelector(state => state.userRegistration)

  // submit the verification code :)
  const handleClick = () =>{
    
  }

  return (
    <>
      <div>
        <div className="mainVerificationCode">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerVerificationCode">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' loading='lazy' />
                <img src={authVerificationCode} alt="auth-verificationCode" className='auth-verificationCode' loading='lazy' />
              </div>
              <div className="verificationCodePart">
                <div className="verificationForm">
                  <div className="verificationCodeHeadingPart">
                    <p className='verificationCodeHeading'>Verification Code</p>
                    <p className='verificationCodeHeadingDescription'>Enter the Verification Code we just send you email Addres</p>
                  </div>
                  <div className="verificationCodeBorderVector"></div>
                  <Otp />
                  <ModerateButton text="Next" onClick={() => handleClick()} disabled={loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
