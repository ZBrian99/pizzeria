import React from 'react'
import "../styles/components/PricingCard.scss"
export const PricingCard = ({imagen = "/assets/pizzas/pizza-1.jpg", title = "Pizza Carnívora", subtitle = "Salsa de tomate, muzzarela, pepperoni, salchicha italiana y jamón", price = "11.95"}) => {
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
