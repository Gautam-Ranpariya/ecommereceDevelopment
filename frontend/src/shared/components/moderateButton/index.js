import React from 'react';
import './moderateButton.scss';

export default function ModerateButton(props) {
  return (
    <div className='moderateButtonMain'>
      <button className='moderateBtn'>{props.text}</button>
    </div>
  )
}
