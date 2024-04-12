import React from 'react'
import './resetPassword.scss';

import AuthDesktop from '../../assets/images/authDesktop.png';
import ModerateButton from '../../shared/components/moderateButton';
import authResetPassword from '../../assets/images/auth-resetPassword.png';
import UserInputConformPassword from '../../shared/components/userInputConformPassword';
import UserInputPassword from '../../shared/components/userInputPassword';

export default function ResetPassword() {


  return (
    <>
      <div>
        <div className="mainResetPassword">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerResetPassword">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' />
                <img src={authResetPassword} alt="auth-resetPassword" className='auth-resetPassword' />
              </div>
              <div className="resetPasswordPart">
                <div className="verificationForm">
                  <div className="resetPasswordHeadingPart">
                    <p className='resetPasswordHeading'>Reset password</p>
                    <p className='resetPasswordHeadingDescription'>Create your new password for tassy so you can login to your account</p>
                  </div>
                  <div className="resetPasswordUserPassword">
                    <p className='resetPasswoedUserEmailHeading'>Create password</p>
                    <UserInputPassword name="password" placeholder="Create password"  />
                  </div>
                  <div className="resetPasswordUserPassword">
                    <p className='resetPasswoedUserEmailHeading'>Confirm password</p>
                    <UserInputConformPassword name="conformPassword" placeholder="Confirm password" />
                  </div>
                  <ModerateButton text="Continue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
