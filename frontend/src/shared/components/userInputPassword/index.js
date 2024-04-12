import React from 'react';
import './userInputPassword.scss';

import eye from '../../../assets/icons/eye.svg';

export default function UserInputPassword(props) {
  const { name ,placeholder} = props;
  return (
    <div className='loginPasswordPart'>
       <img src={eye} alt="eye-icon" className='eyeIcon' />
      <input type='password' name={name} className='userPassword' placeholder={placeholder}  />
    </div>
  )
}
