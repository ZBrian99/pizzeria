import React from 'react'
import "../styles/components/Pricing.scss"
import { PricingCard } from './PricingCard'
import { pizzas } from '../data.json'
export const Pricing = () => {
  return (
		<div className='Pricing'>
			<h2 className='Pricing-Title'>Our Menu Pricing</h2>
			<div className='Pricing-Decoration'>
				{/* <div className='Pricing-Line'>

          <div className='Pricing-Square'>

          </div>

        </div> */}
				<div className='Pricing-Line'></div>
				<div className='Pricing-SmallSquare'></div>
				<div className='Pricing-Square'></div>
				<div className='Pricing-SmallSquare'></div>
				<div className='Pricing-Line'></div>
			</div>
			<p className='Pricing-Subtitle'>
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
				texts.
			</p>
			<div className='Pricing-PricingCardContainer'>
				{pizzas.map((pizza, i) => (
					<PricingCard key={i} {...pizza} />
				))}
			</div>
		</div>
	);
}
