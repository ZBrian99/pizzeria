import React from 'react'
import '../styles/InfoDisplayer.scss'
import Instagramicon from '../assets/Instagramicon.svg'
export const InfoDisplayer = () => {
  return (
    <div className='Info-Displayer'>
        <img src={Instagramicon} alt="Instagramicon" className='Info-DisplayerLogo' />
        <div className='Info-DisplayerDescription'>
            <p className='Info-DisplayerTitle'>Lorem, ipsum dolor.</p>
        <p className='Info-DisplayerSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
    </div>
  )
}
