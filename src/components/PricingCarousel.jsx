import React, { useState } from 'react'
import "../styles/PricingCarousel.scss"
export const PricingCarousel = () => {
    const [isMoving, setIsMoving] = useState(false)
    const [direction, setDirection] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [initialPosition, setInitialPosition] = useState(0)
    const [finalPosition, setFinalPosition] = useState(0)
    const [screenCenter, setScreenCenter] = useState(window.innerWidth/2)
    const handleClick = (e) => {

    }





    const handleMouseDown = (e) => {
        // console.log(
        //     "handleMouseDown"
        // )
        setInitialPosition(e.clientX)
        setIsMoving(true)
    }
    const handleMouseUp = (e) => {
        // console.log(
        //     "handleMouseUp"
        // )
        setIsMoving(false)
        setFinalPosition(e.clientX)
        if (initialPosition>finalPosition){
            setDirection(true)
        }
        // if (initialPosition > finalPosition) {
        //     setDirection(true)
        // }
        // else if (initialPosition < finalPosition) {

        //     setDirection(false)
        // } else {
        //     console.log("nada")
        // }
        console.log(direction)
        console.log(initialPosition, finalPosition)
    }


// console.log(screenCenter)




    const handleMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })

    }
    // console.log(`x: ${position.x} y:${position.y}`)
    return (
        <div className="PricingCarousel" onMouseMove={handleMove} onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >
            <div>
            </div>

            {/* <h1>position {direction}</h1> */}
            <div className={`Cuadrado ${direction ? 'right' : 'left'}`} style={
                isMoving?{ left: `${position.x}px` }:{}
                }>
                {/* Contenido aquí */}





            </div>
        </div >
    )
}
