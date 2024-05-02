import React from 'react'
import './verificationCode.scss';
import AuthDesktop from '../../assets/images/authDesktop.png';
import ModerateButton from '../../shared/components/moderateButton';
import authVerificationCode from '../../assets/images/auth-verificationCode.png';

export default function VerificationCode() {


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
                  <ModerateButton text="Next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
