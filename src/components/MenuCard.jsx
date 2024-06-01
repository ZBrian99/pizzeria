import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/components/MenuCards.scss';
export const MenuCard = ({
	imagen = '/assets/pizzas/pizza-1.jpg',
	title = 'lorem',
	subtitle = 'lorem-ipsum',
	price = '0000.00',
	button = 'ORDER',
}) => {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<div ref={ref} className='MenuCard'>
			<div className={`MenuCard-Container ${inView && 'isVisible'}`}>
				<div className='MenuCard-ImagenContainer'>
					<img src={imagen} alt={title} className='MenuCard-Imagen' />
				</div>
				<div className='MenuCard-Info'>
					<h3 className='MenuCard-Title'>{title}</h3>
					<p className='MenuCard-Subtitle'>{subtitle}</p>
					<div className='MenuCard-SubContainer'>
						<span className='MenuCard-Price'>{`$${price}`}</span>
						<button className='MenuCard-OrderButton'>{button}</button>
					</div>
				</div>
			</div>
		</div>
	);
};
