import React from 'react'
import './socialMediaButton.scss';

export default function SocialMediaButton(props) {
    const { img , alt} = props;
  return (
    <div className='socialMediaButtons'>
      <button className='socialMediaBtn' aria-label='social-media-btns'>
        <img src={img} alt={alt} className='icons' loading='lazy' />
      </button>
    </div>
  )
}
