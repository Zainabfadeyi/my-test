import React from 'react'
import './Data.css'

const Data1 = () => {
  return (
    <div className="infoSection">
        <div style={{display:"flex", alignItems:"center"}}>
            <div className='line-left'></div>
        <div> Intoduction</div>
        <div className='line-right'></div>
        </div>
        
        <h1 style={{fontSize:"50px", margin:"10px"}}>Xplora.io</h1>
        <div className='textSection' style={{textAlign:"center", width:"20%",display:"flex", justifyContent:"center"}}
        >Analyze your data, create your dashboard, and unite your team</div>
      </div>
  )
}

export default Data1