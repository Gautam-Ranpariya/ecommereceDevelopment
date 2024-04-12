import React from 'react';
import './userInputEmail.scss';
import mail from '../../../assets/icons/mail.svg';

export default function UserInputEmail() {

  return (
    <div className='loginEmailPart'>
      <img src={mail} alt="mail-icon" className='mailIcon' />
      <input type='email' name='email' className='userEmail' placeholder='Enter Your Email'  />
    </div>
  )
}
