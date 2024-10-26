import React from 'react'
import './Data2.css'

const Data3 = () => {
  return (
    <div className="data4-container">
     
    <div className="data4-content">
    
      <div className="data4-title">
        GALLERY
      </div>


      <div className="data4-description">
      We focus on ergonomics and meeting you where you work. 
      It's only a keystroke away.
      </div>
      </div>
        <div className='pic' >
            <div className='pics-row1'>
            <img className='imgs' src='/pic/pic7.png' alt='Profile'  />
            
            <img className='imgs' src='/pic/pic2.png' alt='Profile' />
            <img className='imgs' src='/pic/pic3.png' alt='Profile'  />
            <img className='imgs' src='/pic/pic4.png' alt='Profile'/>
            </div>
            <div className='pics-row2'>
            <img className='imgs2' src='/pic/pic1.png' alt='Profile' />
            <img className='imgs3' src='/pic/pic5.png' alt='Profile'/>
            <img className='imgs2' src='/pic/pic6.png' alt='Profile'  />

            </div>
        </div>
        <div className='all-partners'>See More</div>
    </div>
  )
}

export default Data3