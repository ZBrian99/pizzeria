import React, { useState, useEffect, useRef } from "react";
import "../styles/Carousel.scss";

export const Carousel = () => {
  const [imagen, setImagen] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const advanceImage = () => {
      if (!paused) {
        if (imagen < 5) {
          setImagen((count) => count + 1);
        } else {
          setImagen(1);
        }
      }
    };

    timerRef.current = setInterval(advanceImage, 5000);

    return () => clearInterval(timerRef.current);
  }, [imagen, paused]);

  const handleNextButton = () => {
    if (imagen < 5) {
      setImagen((count) => count + 1);
    } else {
      setImagen(1);
    }
    setPaused(false);
  };

  const handlePrevButton = () => {
    if (imagen > 1) {
      setImagen((count) => count - 1);
    } else {
      setImagen(5);
    }
    setPaused(false);
  };

  const handleCarouselEnter = () => {
    setPaused(true);
  };
  const handleCarouselLeave = () => {
    setTimeout(() => {
      setPaused(false);
    }, 5000);

  }
  return (
    <div className="Carousel" onMouseEnter={handleCarouselEnter} onMouseLeave={handleCarouselLeave}>
      <button className="Carousel-Left" onClick={handlePrevButton}>
        {"<"}{" "}
      </button>
      <div
        className="Carousel-ImgContainer"
        style={{ transform: `translateX(${imagen === 1 ? 0 : (imagen - 1) * -100}%)` }}
      >
        <img draggable="false" src="src/assets/pizzas/pizza-1.jpg" className="Carousel-Image" alt="" />
        <img draggable="false" src="src/assets/pizzas/pizza-2.jpg" className="Carousel-Image" alt="" />
        <img draggable="false" src="src/assets/pizzas/pizza-7.jpg" className="Carousel-Image" alt="" />
        <img draggable="false" src="src/assets/pizzas/pizza-4.jpg" className="Carousel-Image" alt="" />
        <img draggable="false" src="src/assets/pizzas/pizza-5.jpg" className="Carousel-Image" alt="" />
      </div>
      <button className="Carousel-Right" onClick={handleNextButton}>
        {">"}
      </button>
    </div>
  );
};