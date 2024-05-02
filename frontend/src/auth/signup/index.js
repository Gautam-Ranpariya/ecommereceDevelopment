import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import authSignUp from '../../assets/images/auth-signUp.png';
import UserInputConformPassword from '../../shared/components/userInputConformPassword';
import { alreadyUser, sendOtpMail, setNewUserData } from '../../redux/userRegistrationSclice';

export default function SignUp() {


  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = {
      ...newUser,
      [name]: value,
    }
    setNewUser(data); 
  };
  
  
  // submit user data :)
  const handleClick = () => {
    const userData = dispatch(setNewUserData(newUser))
    if (userData) {
      const newUserEmail = userData.payload.email
      dispatch(alreadyUser(newUserEmail))
  }



  return (
    <>
      <div>
        <div className="mainSignUp">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerSignUp">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' loading='lazy' />
                <img src={authSignUp} alt="auth-signUp" className='auth-signUp' loading='lazy' />
              </div>
              <div className="signUpPart">
                <div className="signUpForm">
                  <div className="signUpHeadingPart">
                    <p className='signUpHeading'>Sign Up</p>
                  </div>
                  <UserInputEmail name="email" placeholder="Enter Your Email" onChange={(e) => handleChange(e)} value={newUser.email} />
                  <UserInputPassword name="password" placeholder="Enter Your Password" onChange={(e) => handleChange(e)} value={newUser.password} />
                  <UserInputConformPassword name="conformPassword" placeholder="Confiram Password" onChange={(e) => handleChange(e)} value={newUser.conformPassword} />
                  <ModerateButton text="Sign Up" onClick={(e) => handleClick(e)} />
                  <div className="signInWithPart">
                    <div className='vector'></div>
                    <div className='otherOption'>
                      <p className='signUpOption'>Or Sign Up With</p>
                    </div>
                    <div className='vector'></div>
                  </div>
                  <div className='signUpSocialMediaPart'>
                    <SocialMediaButton img={facebookIcon} alt="facebook Icon" />
                    <SocialMediaButton img={googleIcon} alt="google Icon" />
                    <SocialMediaButton img={linkedInIcon} alt="linkedIn Icon" />
                  </div>
                  <div className="accountOptionPart">
                    <p className='accountDescription'>Alreay have an accout? <Link to={'/login'} className='signUpLink'>Sing In</Link></p>
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
