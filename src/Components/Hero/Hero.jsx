import React from 'react'
import './Hero.css'
import hero from '../Assets/Frontend_Assets/hero_image.png'
import arrow from '../Assets/Frontend_Assets/arrow.png'
const Hero = ({ onScrollToNew }) => {
  return (
    <div className='hero'>
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
            </div>
            <p>collects </p>
            <p>for everyone</p>    
        </div>
        <div onClick={onScrollToNew} role="button" className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
    </div>
    <div className="hero-right">
        <img src={hero} alt="" />
    </div>
    </div>
  )
}

export default Hero