import React from 'react'
import './login.scss';

import AuthDesktop from '../../assets/images/authDesktop.png';
import UserInputEmail from '../../shared/components/userInputEmail';
import UserInputPassword from '../../shared/components/userInputPassword';
import { Link, useNavigate } from 'react-router-dom';
import ModerateButton from '../../shared/components/moderateButton';
import SocialMediaButton from '../../shared/components/socialMediaButton';
import facebookIcon from '../../assets/icons/facebook.svg';
import googleIcon from '../../assets/icons/google.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';
import authLogin from '../../assets/images/auth-login.png';
import { useDispatch, useSelector } from 'react-redux';
import ValidateUserLogin from '../../validation/loginValidation';
import { loginUser, loginUserData, resetUserData } from '../../redux/userRegistrationSclice';
import { toast } from 'react-toastify';

export default function Login() {

  const {loading , user } = useSelector(state => state.userRegistration);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // submit login form :)
  const handleClick = async (e) => {
    if (ValidateUserLogin(user)) {
    await dispatch(loginUser(user))
      .then((res) => {
        console.log('User Login Success', res.payload);
        if (res.payload.msg === 'user login') {
          localStorage.setItem('authToken', res.payload.token);
          dispatch(resetUserData());
        }
      })
      .catch((err) => {
        if (err.response.data.msg !== '') {
          navigate('/signup');
          toast.error('please sign up first');
        }
        console.log("error :-- login catch --", err.res);
      });
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(loginUserData({ name, value}))
  }


  return (
    <>
      <div>
        <div className="mainLogin">
          <div className="vectorTop"></div>
          <div className="vectorBottom"></div>
          <div className="container">
            <div className="innerLogin">
              <div className="imagePart">
                <img src={AuthDesktop} alt="authDesktopImage" className='auth' loading='lazy' />
                <img src={authLogin} alt="auth-login" className='auth-login' loading='lazy' />
              </div>
              <div className="loginPart">
                <div className="loginForm">
                  <div className="loginHeadingPart">
                    <p className='loginHeading'>Login</p>
                    <p className='headingDescription'>Login to your account to continue</p>
                  </div>
                  <UserInputEmail name="email" placeholder="Enter Your Email" onChange={(e) => handleChange(e)} value={user.email} />
                  <UserInputPassword name="password" placeholder="Enter Your Password" onChange={(e) => handleChange(e)} value={user.password} />
                  <div className="forgotPasswordPart">
                    <p className='forgotPassword'>
                      <Link to={'/forgotPassword'} className='forgot'>Forgot password?</Link>
                    </p>
                  </div>
                  <ModerateButton text="Login" onClick={(e) => handleClick(e)} disabled={loading === 'pending' ? true : false} />
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
