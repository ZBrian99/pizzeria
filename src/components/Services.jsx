import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Importa todos los íconos sólidos
import '../styles/components/Services.scss';

export const Services = () => {
	return (
		<div className='Service'>
			<h2 className='Service-Title'>Our Services</h2>
			<p className='Service-Description'>
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
				texts.
			</p>
			<div className='Service-Section'>
				<div className='Service-BackgroundEfect'>
					<FontAwesomeIcon icon={fas.faPizzaSlice} className='Service-Icon' />
				</div>
				<h3 className='Service-Subtitle'>Healthy Foods</h3>
				<p className='Service-Description'>
					Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
				</p>
			</div>
			<div className='Service-Section'>
				<div className='Service-BackgroundEfect'>
					<FontAwesomeIcon icon={fas.faShop} className='Service-Icon' />
				</div>
				<h3 className='Service-Subtitle'>Fastest Delivery</h3>
				<p className='Service-Description'>
					Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
				</p>
			</div>
			<div className='Service-Section'>
				<div className='Service-BackgroundEfect'>
					<FontAwesomeIcon icon={fas.faGifts} className='Service-Icon' />
				</div>
				<h3 className='Service-Subtitle'>Original Recipes</h3>
				<p className='Service-Description'>
					Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
				</p>
			</div>
		</div>
	);
};
