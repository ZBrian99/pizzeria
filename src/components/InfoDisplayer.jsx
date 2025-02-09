import React from 'react'
import '../styles/components/InfoDisplayer.scss'
import Instagramicon from '../assets/Instagramicon.svg'
export const InfoDisplayer = () => {
  return (
    <div className='Info-Displayer'>
        <img src={Instagramicon} alt="Instagramicon" className='Info-DisplayerLogo' />
        <div className='Info-DisplayerDescription'>
        <p className='Info-DisplayerTitle'>
         +54 223 669 8045
        </p>
        <p className='Info-DisplayerSubtitle'>A small river named Duden flows</p>
            </div>
    </div>
  )
}
