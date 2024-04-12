import React from 'react'
import './forgotPassword.scss';

import AuthDesktop from '../../assets/images/authDesktop.png';
import ModerateButton from '../../shared/components/moderateButton';
import authForgotPassword from '../../assets/images/auth-forgotPassword.png';
import UserInputEmail from '../../shared/components/userInputEmail';
import SocialMediaButton from '../../shared/components/socialMediaButton';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';

export default function ForgotPassword() {


  return (
    <>
      <div>
        <div className="mainForgotPassword">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerForgotPassword">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' />
                <img src={authForgotPassword} alt="auth-forgotPassword" className='auth-forgotPassword' />
              </div>
              <div className="forgotPasswordPart">
                <div className="verificationForm">
                  <div className="forgotPasswordHeadingPart">
                    <p className='forgotPasswordHeading'>Forgot Password</p>
                    <p className='forgotPasswordHeadingDescription'>Enter the email address associated with your accuont</p>
                  </div>
                  <UserInputEmail name="email" placeholder="Enter your Email" />
                  <ModerateButton text="Send" />
                  <div className="signInWithPart">
                    <div className='vector'></div>
                    <div className='otherOption'>
                      <p className='signInOption'>Or Sign In With</p>
                    </div>
                    <div className='vector'></div>
                  </div>
                  <div className='forgotPasswordSocialMediaPart'>
                    <SocialMediaButton img={facebookIcon} alt="facebook Icon" />
                    <SocialMediaButton img={googleIcon} alt="google Icon" />
                    <SocialMediaButton img={linkedInIcon} alt="linkedIn Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
