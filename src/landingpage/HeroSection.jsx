import React from 'react';
import './HeroSection.css'


const HeroSection = ({ children }) => {
  return (
    <div className='hero-section'>
      <div>{children}</div>
    </div>
  );
};

export default HeroSection;
