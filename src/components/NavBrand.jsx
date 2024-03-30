import "../styles/NavBrand.scss"
import logo from "../assets/pizzalogo.svg" 
import { Link } from "react-router-dom"
export const NavBrand = () => {
  return (
    <Link className="NavBrand" to={"/"}>
      <div className="NavBrand-content">
          
      <img className="NavBrand-logo" src={logo} alt="" />
      <h1 className="NavBrand-title">Pizza</h1>
      </div>
      <h2 className="NavBrand-description">DELICIOUS</h2>
    </Link>
  )
}