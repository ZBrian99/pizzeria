import React from 'react';
import '../styles/components/Menu.scss';
import { MenuCard } from './MenuCard';
// const Menu =[{image="src/assets/pizzas/pizza-1.jpg"}]
import { pizzas } from '../data.json';
import { useInView } from 'react-intersection-observer';
export const Menu = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div className='Menu' ref={ref} id='menu'>
			<div className={`Menu-Header ${inView && 'isVisible'}`}>
				<h2 className='Menu-Title'>PIZZA MENU</h2>
				<p className='Menu-Description'>
					Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
					the blind texts.
				</p>
			</div>
			{/* <MenuCard/> */}
			{pizzas.map((item, i) => (
				<MenuCard key={i} {...item} />
			))}
			{pizzas.map((item, i) => (
				<MenuCard key={i} {...item} />
			))}
		</div>
	);
};
