import React from 'react'
import "../styles/PricingCard.scss"
export const PricingCard = ({imagen = "src/assets/pizzas/pizza-1.jpg", title = "lorem", subtitle = "lorem-ipsum", price = "0000.00"}) => {
    return (
        <div className='PricingCard'>
            <div className='PricingCard-ImageContainer'>
                <img src={imagen} alt="pizza-4" className='PricingCard-Image' />


            </div>
            <div className='PricingCard-Info'>
                <h3 className='PricingCard-Title'>
{title}
                </h3>
                <span className='PricingCard-Price'>
{`$${price}`}
                </span>
                <p className='PricingCard-Description'>
{subtitle}
                </p>
            </div>
        </div>
    )
}
