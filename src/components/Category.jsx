import React, { useState } from 'react';
import '../styles/components/Category.scss';
import { CategoryItem } from './CategoryItem';
import data from '../data.json';
import { useInView } from 'react-intersection-observer';

export const Category = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	const [CategorySelection, setCategorySelection] = useState(1);
	const handlePizzaButton = () => {
		setCategorySelection(1);
	};
	const handleDrinksButton = () => {
		setCategorySelection(2);
	};
	const handleBurgersButton = () => {
		setCategorySelection(3);
	};
	const handlePastaButton = () => {
		setCategorySelection(4);
	};

	let selection;
	if (CategorySelection === 1) {
		selection = data.pizzas.map((item, index) => <CategoryItem key={index} {...item} />);
	} else if (CategorySelection === 2) {
		selection = data.drinks.map((item, index) => <CategoryItem key={index} {...item} />);
	} else if (CategorySelection === 3) {
		selection = data.burgers.map((item, index) => <CategoryItem key={index} {...item} />);
	} else if (CategorySelection === 4) {
		selection = data.pastas.map((item, index) => <CategoryItem key={index} {...item} />);
	}

	return (
		<div className='Category' id='category'>
			<div className='Category-FoodButtonsContainer' ref={ref}>
				<button className={`Category-FoodButton  ${inView && 'isVisible'}`} onClick={handlePizzaButton}>
					Pizza
				</button>
				<button className={`Category-FoodButton  ${inView && 'isVisible'}`} onClick={handleDrinksButton}>
					Drinks
				</button>
				<button className={`Category-FoodButton  ${inView && 'isVisible'}`} onClick={handleBurgersButton}>
					Burgers
				</button>
				<button className={`Category-FoodButton  ${inView && 'isVisible'}`} onClick={handlePastaButton}>
					Pasta
				</button>
			</div>
			<div className='Category-Items'>{selection}</div>
		</div>
	);
};
