import React from 'react'
import'./AboutUs.css';
import { assets } from '../../assets/assets';
const AboutUs = () => {
  return (
    <div className='about-us' id='about-us'>
        <div className="about-us-left">
            <div className="about-us-content">
                <h2>Who Are We?</h2><br />
                <p>We are a passionate team dedicated to bring delicious, high-quality meals to your doorstep. Our mission is to provide a seamless food delivery experience with a focus on freshness, taste.</p>
            </div><br />
            <div className="about-us-one-two">
                <div className="about-us-one">
                    <img src={assets.restaurant} alt="restaurant image" />
                    <h2 className='h2'>Our Restaurant</h2>
                    <p className='para'>A place where passion for food meets with an excellence and enjoy around the world.</p>
                </div>
                <div className="about-us-two">
                  <img src={assets.server} alt="server image" />
                  <h2 className='h2'>Our Server</h2>
                  <p className='para'>Our friendly and dedicated ensures seamless dining and enjoy around the world enjoyed.</p>
                </div>
            </div>
            <div className="about-us-three-four">
                <div className="about-us-three">
                  <img src={assets.service} alt="service image" />
                  <h2 className='h2'>Our Service</h2>
                  <p className='para'>Fast, reliable, and have an customer focused dishes and enjoy around the world enjoyed.</p>
                </div>
                <div className="about-us-four">
                  <img src={assets.food} alt="food image" />
                  <h2 className='h2'>Our Food</h2>
                  <p className='para'>We offer a diverse menu of freshly prepared dishes and enjoy around the world enjoyed.</p>
                </div>
            </div>
        </div>
        <div className="about-us-right">
          <img src={assets.about_us} alt="about us" />
        </div>
    </div>
  )
}

export default AboutUs