import "../styles/NavBar.scss"
import { NavButton } from "./NavButton"
import { NavBrand } from "./NavBrand"
import { useEffect, useRef, useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  const [navIsOpen, setNavIsOpen] = useState(true);

  const navRef = useRef();

 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavIsOpen(true);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleNavButtonToggle = () => {
    setNavIsOpen(!navIsOpen)
    console.log(navIsOpen)
  };

  return (
    <>
      <div className='NavBar' ref={navRef}>
        <NavBrand />
        <div className="NavButtonContainer">
          <button
            className="NavToggleButton"
            onClick={() => {
              handleNavButtonToggle();
            }}
          >
            <FontAwesomeIcon icon={fas.faBars} />
          </button>
          {
            <div className={`NavButtonList ${navIsOpen ? "isActive" : ""}`}>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/"}>Home</NavButton>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/menu"}>Menu</NavButton>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/services"}>Services</NavButton>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/news"}>News</NavButton>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/aboutus"}>About</NavButton>
              <NavButton setNavIsOpen={setNavIsOpen} url={"/contact"}>Contact</NavButton>
            </div>
          }
        </div>

      </div>
    </>
  )
}
