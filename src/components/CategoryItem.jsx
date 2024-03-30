import React from 'react'
import "../styles/CategoryItem.scss"
export const CategoryItem = ({ imagen = "src/assets/pizzas/pizza-1.jpg", title = "lorem", subtitle = "lorem-ipsum", price = "0000.00", button = "Order" }) => {
    return (
        <div className='CategoryItem' >

            <div className='CategoryItem-ImagenContainer'>
                <img src={imagen} alt={title} className='CategoryItem-Imagen' />
            </div>
            <div className='CategoryItem-Info'>
                <h3 className='CategoryItem-Title'>
                    {title}
                </h3>
                <p className='CategoryItem-Subtitle'>
                    {subtitle}
                </p>

                    <span className='CategoryItem-Price'>
                        {`$${price}`}
                    </span>
                    <button className='CategoryItem-OrderButton'>
                       {button}
                    </button>
                
            </div>

        </div>
    )
}
