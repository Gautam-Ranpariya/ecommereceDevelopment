import React from 'react';
import './userInputPassword.scss';

import eye from '../../../assets/icons/eye.svg';

export default function UserInputPassword() {
  return (
    <div className='loginPasswordPart'>
       <img src={eye} alt="eye-icon" className='eyeIcon' />
      <input type='password' name='password' className='userPassword' placeholder='Enter Your Password'  />
    </div>
  )
}
