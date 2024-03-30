import React from 'react'
import "../styles/News.scss"
import { NewsCard } from './NewsCard'
import {pizzas} from '../data.json'
export const News = () => {
  return (
    <div className='News'>
        <h2 className='News-Title'>
Lorem, ipsum.

        </h2>
        <p className='News-Description'>
Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
{
    pizzas.slice(0, 3).map((pizza, index) => (
        <NewsCard key={index} {...pizza} imagen={`src/assets/news/image_${index+1}.jpg`} />
      ))
      
}
    </div>
  )
}
