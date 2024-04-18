import React from 'react';
import './moderateOutlineButton.scss';

export default function ModerateOutlineButton(props) {
    const { text , onClick} = props;
  return (
    <div className='moderateOutlineButtonMain'>
      <button className='moderateOutlineBtn' onClick={onClick}>{text}</button>
    </div>
  )
}
