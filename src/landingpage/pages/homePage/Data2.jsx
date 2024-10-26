import React from 'react'
import './Data2.css'

const Data2 = () => {
  return (
    <div className="data4-container">
     
    <div className="data4-content">
    
      <div className="data4-title">
        FEATURES
      </div>
            <div  className="data4-description">
            Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule
            </div>

        </div>
        <div className='data2'>
            <div className='dataWrapper1'>
                <img  className='data2Img1' src='/pic/spon.png' alt="profile" />
                <div style={{fontWeight:"600",textAlign:"center",display:"flex"}}>A single source of truth</div>
                <div className='data2Text'>When you add work to your 
                Slate calendar we automatically 
                calculate useful insights </div>
            </div>
            <div className='dataWrapper'>
            <img  className='data2Img' src='/pic/alien.png' alt="profile" />
                <div style={{fontWeight:"600",textAlign:"center",display:"flex"}}>Intuitive interface</div>
                <div className='data2Text'>
                When you add work to your 
                Slate calendar we automatically 
                calculate useful insights 
                </div>
            </div>
            <div>
            <div className='dataWrapper2'>
            <img className='data2Img2' src='/pic/inf.png' alt="profile" />
                <div className='rules'>Or with rules</div>
                <div className='data2Text'>
                When you add work to your 
                Slate calendar we automatically 
                calculate useful insights 
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Data2