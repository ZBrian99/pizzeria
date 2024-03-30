import React, { useState } from 'react'
import "../styles/Category.scss"
import { CategoryItem } from './CategoryItem'
import data from '../data.json'


export const Category = () => {
    const [CategorySelection, setCategorySelection] = useState(1)
    const handlePizzaButton = () => {
        setCategorySelection(1)
    }
    const handleDrinksButton = () => {
        setCategorySelection(2)
    }
    const handleBurgersButton = () => {
        setCategorySelection(3)
    }
    const handlePastaButton = () => {
        setCategorySelection(4)
    }
    
let selection     
if(CategorySelection===1)
{
    selection=data.pizzas.map((item,index)=>(
<CategoryItem key={index}{...item}/>
))
}
else if (CategorySelection===2) {
    selection=data.drinks.map((item,index)=>(
        <CategoryItem key={index}{...item}/>))
}
else if (CategorySelection===3) {
    selection=data.burgers.map((item,index)=>(
        <CategoryItem key={index}{...item}/>))
}
else if (CategorySelection===4) {
    selection=data.pastas.map((item,index)=>(
        <CategoryItem key={index}{...item}/>))
}


return (

        <div className='Category' id='category'>
            <div className='Category-FoodButtonsContainer'>
                <button className='Category-FoodButton' onClick={handlePizzaButton}>Pizza</button>
                <button className='Category-FoodButton' onClick={handleDrinksButton}>Drinks</button>
                <button className='Category-FoodButton' onClick={handleBurgersButton}>Burgers</button>
                <button className='Category-FoodButton' onClick={handlePastaButton}>Pasta</button>
            </div>
            <div className='Category-Items'>
                { 
                 selection
                }
            </div>
        </div>
    )
}

