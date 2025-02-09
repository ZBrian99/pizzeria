import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/components/CategoryItem.scss';

export const CategoryItem = ({
	imagen = '/assets/pizzas/pizza-1.jpg',
	title = 'Pizza Carnívora',
	subtitle = 'Salsa de tomate, muzzarela, pepperoni, salchicha italiana y jamón',
	price = '11.95',
	button = 'Order',
}) => {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	return (
		<div className='CategoryItem' ref={ref}>
			<div className={`CategoryItem-ImagenContainer ${inView && 'imageIsVisible'}`}>
				<img src={imagen} alt={title} className='CategoryItem-Imagen' />
			</div>
			<div className='CategoryItem-Info'>
				<h3 className={`CategoryItem-Title ${inView && 'isVisible'}`}>{title}</h3>
				<p className={`CategoryItem-Subtitle ${inView && 'isVisible'}`}>{subtitle}</p>

				<span className={`CategoryItem-Price ${inView && 'isVisible'}`}>{`$${price}`}</span>
				<button className={`CategoryItem-OrderButton ${inView && 'isVisible'}`}>{button}</button>
			</div>
		</div>
	);
};
