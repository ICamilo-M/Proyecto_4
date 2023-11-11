
import React from 'react'
import video from '../videos/salchii.mp4'
import './presention.css'

function Presentation() {
  return (
    <>
    <div className='homeContenedor'>
        <div className='homeBg'>
           
            <video  className='videoig' autoPlay loop muted src={video} type='video/mp4'/>

        </div>


    </div>

    </>
    
  )
}

export default Presentation