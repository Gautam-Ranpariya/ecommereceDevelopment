import React from 'react'
import './signup.scss';

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
import UserInputConformPassword from '../../shared/components/userInputConformPassword';

export default function SignUp() {


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
                    <p className='loginHeading'>Sign Up</p>
                  </div>
                  <UserInputEmail name="password" placeholder="Enter Your Email" />
                  <UserInputPassword name="password" placeholder="Enter Your Password" />
                  <UserInputConformPassword name="conformPassword" placeholder="Confiram Password" />
                  <ModerateButton text="Sign Up" />
                  <div className="signInWithPart">
                    <div className='vector'></div>
                    <div className='otherOption'>
                      <p className='signInOption'>Or Sign Up With</p>
                    </div>
                    <div className='vector'></div>
                  </div>
                  <div className='signInOptionPart'>
                    <SocialMediaButton img={facebookIcon} alt="facebook Icon" />
                    <SocialMediaButton img={googleIcon} alt="google Icon" />
                    <SocialMediaButton img={linkedInIcon} alt="linkedIn Icon" />
                  </div>
                  <div className="signupOptionPart">
                    <p className='signupDescription'>Alreay have an accout? <Link to={'/login'} className='signupLink'>Sing In</Link></p>
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
