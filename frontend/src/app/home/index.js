import React  from 'react';
import './home.scss';
import logo from '../../assets/logo/logo.png';
import ModerateButton from '../../shared/components/moderateButton';
import ModerateOutlineButton from '../../shared/components/moderateOutlineButton';
import vectorTop from '../../assets/images/homeTopVector.png';
import vectorBottom from '../../assets/images/homeBottomVector.png';
import homeShopping from '../../assets/images/homeShopping.png';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();

  const handleClick = (param) => {
    navigate(`${param}`);
  }

  return (
    <>
      <div className='mainHome'>
        <div className="homeTopVector">
          <img src={vectorTop} alt="vector top" className='topVectorImageHome' />
        </div>
        <div className="homeBottomVector">
          <img src={vectorBottom} alt="vector bottom" className='bottomVectorImageHome' />
        </div>
        <div className="homeMobileTopVector"></div>
        <div className="homeMobilebottomVector"></div>
        <div className="innerHome">
          <div className="homeHeader">
            <div className="container">
              <div className="logo">
                <img src={logo} alt="Online Shop" className='logoImage' />
              </div>
              <div className="headerItems">
                <ModerateButton text="Login" onClick={() => handleClick('/login')} />
                <ModerateOutlineButton text="Sign up" onClick={() => handleClick('/signup')} />
              </div>
            </div>
          </div>
          <div className="homeMainContent">
            <div className="homeContentPart">
              <div className="innerContentPart">
                <h3 className='mainHomeHeading'>Online shopping</h3>
                <p className='homeHeadingDescription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ModerateButton text="Get Started" onClick={() => handleClick('/login')} />
              </div>
            </div>
            <div className="homeImagePart">
              <div className="homeBannerImage">
              </div>
              <img src={homeShopping} alt="home - shopping" className='homeShoppingGirl' />
            </div>
            <div className="homeMobileContentPart">
              <h2 className='homeMobileHeading'>Welcome</h2>
              <p className='homeMobileHeadingDescription'>Ready to start shoping. login up to get Started.</p>
            </div>
            <div className="homeMobileImagePart">
              <div className="homeMobileBannerImage"></div>
              <img src={homeShopping} alt="home - shopping" className='homeMobileShoppingGirl' />
            </div>
            <div className="homeMobileAuthButtons">
              <ModerateButton text="Login" onClick={() => handleClick('/login')} />
              <ModerateOutlineButton text="Sign up" onClick={() => handleClick('/signup')}  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
