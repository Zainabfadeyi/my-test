import React from 'react';
import './Data2.css';

const Data4 = () => {
  return (
    <div className="data4-container">
     
      <div className="data4-content">
      
        <div className="data4-title">
          PARTNERS
        </div>

  
        <div className="data4-description">
          We focus on ergonomics and meeting you where you work.
          It's only a keystroke away.
        </div>
      </div>
      <div className='icons' style={{display:"flex", columnGap:"25px", marginTop:"35px"}}>
        <div className='icon-row' style={{display:"flex", columnGap:"25px"}}> 
        <img src='/images/app-store.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <img src='/images/logos_apiary.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <img src='/images/vector.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </div>
        <div  className='icon-row' style={{display:"flex", columnGap:"25px"}}>
       
        <img src='/images/logos_basecamp.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <img src='/images/triangle.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <img src='/images/ibm.png' alt='Profile' style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        </div>
      </div>
      <div className='all-partners'>All Partners</div>
    </div>
  );
};

export default Data4;
