import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './signup.scss';
import AuthDesktop from '../../assets/images/authDesktop.png';
import UserInputEmail from '../../shared/components/userInputEmail';
import UserInputPassword from '../../shared/components/userInputPassword';
import { Link, useNavigate } from 'react-router-dom';
import ModerateButton from '../../shared/components/moderateButton';
import SocialMediaButton from '../../shared/components/socialMediaButton';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';
import authSignUp from '../../assets/images/auth-signUp.png';
import UserInputConformPassword from '../../shared/components/userInputConformPassword';
import { alreadyUser, sendOtpMail, setNewUserData, resetUserData } from '../../redux/userRegistrationSclice';
import ValidateUserRegistration from '../../validation/signUp-forgotPasswordValidation';
import { toast } from 'react-toastify';

export default function SignUp() {


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [enterDisabled, setEnterDisabled] = useState(false);

  const { loading, user } = useSelector(state => state.userRegistration);


  // enter key disabled :)
  const handleKeyDown = (event) => {
    console.log('setEnterDisabled', enterDisabled);
    if (event.keyCode === 13 && !enterDisabled) {
      setEnterDisabled(true);
      handleClick();
    }
  }


  // handle chnage :)
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setNewUserData({ name, value }));
  }


  // submit user data :)
  const handleClick = async () => {
    if (ValidateUserRegistration(user)) {
      localStorage.setItem('newUserData', JSON.stringify(user));
      dispatch(alreadyUser(user.email)).then((res) => {
        if (res.payload.alreadyUser === false) {
          dispatch(sendOtpMail(user.email)).then((res) => {
            if (res.payload.mailSend) {
              dispatch(resetUserData());
              navigate('/verificationCode');
            }
            else { console.log('mail not send'); }
          })
            .catch((err) => {
              console.log("error :-- send otp catch --", err);
              localStorage.removeItem('newUserData');
            toast.error('something went wrong please try again !');
            })
            .catch((err) => {
              console.log("error :-- verified otp catch --", err);
              localStorage.removeItem('newUserData');
              toast.error('something went wrong please try again !');
            })
        }
        else {
          navigate('/login');
          localStorage.removeItem('newUserData');
        }
      })
        .catch((err) => {
          console.log("error :--", err);
          localStorage.removeItem('newUserData');
          toast.error('something went wrong please try again !');
        })
    }
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
                  <UserInputEmail name="email" placeholder="Enter Your Email" onChange={(e) => handleChange(e)} value={user.email} />
                  <UserInputPassword name="password" placeholder="Enter Your Password" onChange={(e) => handleChange(e)} value={user.password} />
                  <UserInputConformPassword name="conformPassword" placeholder="Confiram Password" onChange={(e) => handleChange(e)} value={user.conformPassword} onKeyDown={(e) => handleKeyDown(e)} />
                  <ModerateButton text="Sign Up" onClick={(e) => handleClick(e)} disabled={loading === 'pending' ? true : false} />
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
