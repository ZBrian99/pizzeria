import React from 'react'
import "../styles/Menu.scss"
import { MenuCard } from './MenuCard'
// const Menu =[{image="src/assets/pizzas/pizza-1.jpg"}]
import {pizzas} from '../data.json'
export const Menu = () => {
    return (
        <div className='Menu' id="menu" >
            <h2 className='Menu-Title'>
            OUR MENU
            </h2>
            <p className='Menu-Description'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.


            </p>
            {/* <MenuCard/> */}
            {
                pizzas.map((item,i)=>(
                    <MenuCard key={i}{...item}/>


                ))
            }

        </div>
    )
}
