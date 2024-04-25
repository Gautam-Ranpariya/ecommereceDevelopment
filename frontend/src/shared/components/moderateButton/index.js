import React from 'react';
import './moderateButton.scss';

export default function ModerateButton(props) {
  const { text, onClick } = props;
  return (
    <div className='moderateButtonMain'>
      <button className='moderateBtn' aria-label={text} onClick={onClick} >{text}</button>
    </div>
  )
}
