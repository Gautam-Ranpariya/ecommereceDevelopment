import React from 'react';
import './moderateButton.scss';

export default function ModerateButton(props) {
  const { text, onClick } = props;
  return (
    <div className='moderateButtonMain'>
      <button className='moderateBtn' onClick={onClick}>{text}</button>
    </div>
  )
}
