import "../styles/Hero.scss"
import { Carousel } from "./Carousel"


export const Hero = () => {
  return (
    <div className="Hero">
      {/* <div className="Hero-info"> */}

      {/* <span className="Hero-frase"> hero frase
            </span> */}
      <h2 className="Hero-title"> Lorem ipsum dolor sit!</h2>
      <p className="Hero-subtitle"> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      <div className="Hero-imgContainer">
        {/* <img className="Hero-img" src="src/assets/plato.png" alt="plato.png" /> */}
        <Carousel />

      </div>
      <div className="Hero-buttonContainer">
      <button className="Hero-Button" >Order Now</button>
        <a href="#menu" className="Hero-ButtonLink"><button className="Hero-Button" >View Menu</button></a>
      </div>
    </div>
    // </div>
  )
}
