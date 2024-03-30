import React from 'react'
import "../styles/Welcome.scss"

export const Welcome = () => {
  return (
    <div className='Welcome'>
    <img src="src/assets/welcome.jpg" alt="welcome.jpg" className='Welcome-Img'/>
    <h2 className='Welcome-Title'>Lorem ipsum dolor 
     <span className='Welcome-Span'> #Pipzum</span> sit amet consectetur.</h2>
    
    <p className='Welcome-Lore'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Nulla quae soluta incidunt animi iure facilis, impedit eligendi eaque accusamus sint?
         </p>

    </div>
  )
}
