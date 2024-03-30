import React from 'react'
import "../styles/MenuCards.scss"
export const MenuCard = ({ imagen = "src/assets/pizzas/pizza-1.jpg", title = "lorem", subtitle = "lorem-ipsum", price = "0000.00", button = "ORDER" }) => {
  return (
    <div className='MenuCard' >

      <div className='MenuCard-ImagenContainer'>
        <img src={imagen} alt={title} className='MenuCard-Imagen' />
      </div>
      <div className='MenuCard-Info'>
        <h3 className='MenuCard-Title'>
          {title}
        </h3>
        <p className='MenuCard-Subtitle'>
          {subtitle}
        </p>
        <div className='MenuCard-SubContainer'>

          <span className='MenuCard-Price'>
            {`$${price}`}
          </span>
          <button className='MenuCard-OrderButton'>
            {button}
          </button>
        </div>
      </div>

    </div>
  )
}
