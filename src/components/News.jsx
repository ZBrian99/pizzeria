import React from 'react'
import "../styles/components/News.scss"
import { NewsCard } from './NewsCard'
import {pizzas} from '../data.json'
export const News = () => {
  return (
		<div className='News'>
			<h2 className='News-Title'>Recent from blog</h2>
			<p className='News-Description'>
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
				texts.
			</p>
			{pizzas.slice(0, 3).map((pizza, index) => (
				<NewsCard key={index} {...pizza} imagen={`/assets/news/image_${index + 1}.jpg`} />
			))}
		</div>
	);
}
