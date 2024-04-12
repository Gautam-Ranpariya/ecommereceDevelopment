import React from 'react'
import './login.scss';

import AuthDesktop from '../../assets/images/authDesktop.png';
import UserInputEmail from '../../shared/components/userInputEmail';
import UserInputPassword from '../../shared/components/userInputPassword';
import { Link } from 'react-router-dom';
import ModerateButton from '../../shared/components/moderateButton';
import SocialMediaButton from '../../shared/components/socialMediaButton';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';
import authLogin from '../../assets/images/auth-login.png';

export default function Login() {


  return (
    <>
      <div>
        <div className="mainLogin">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerLogin">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' />
                <img src={authLogin} alt="auth-login" className='auth-login' />
              </div>
              <div className="loginPart">
                <div className="loginForm">
                  <div className="loginHeadingPart">
                    <p className='loginHeading'>Login</p>
                    <p className='headingDescription'>Login to your account to continue</p>
                  </div>
                  <UserInputEmail name="password" placeholder="Enter Your Email" />
                  <UserInputPassword name="password" placeholder="Enter Your Password" />
                  <div className="forgotPasswordPart">
                    <p className='forgotPassword'>
                      <Link to={'/forgotPassword'} className='forgot'>Forgot password?</Link>
                    </p>
                  </div>
                  <ModerateButton text="Login" />
                  <div className="signInWithPart">
                    <div className='vector'></div>
                    <div className='otherOption'>
                      <p className='signInOption'>Or Sign In With</p>
                    </div>
                    <div className='vector'></div>
                  </div>
                  <div className='loginSocialMediaPart'>
                    <SocialMediaButton img={facebookIcon} alt="facebook Icon" />
                    <SocialMediaButton img={googleIcon} alt="google Icon" />
                    <SocialMediaButton img={linkedInIcon} alt="linkedIn Icon" />
                  </div>
                  <div className="signupOptionPart">
                    <p className='signupDescription'>Don`t have an account? <Link to={'/signup'} className='signupLink'>Sing up</Link></p>
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
