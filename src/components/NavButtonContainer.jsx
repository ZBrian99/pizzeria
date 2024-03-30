import React, { useEffect, useRef, useState } from "react";
import { NavButton } from "./NavButton";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavButtonContainer = () => {

  const handleNavButtonToggle = () => {
    setNavIsOpen(!navIsOpen)
    console.log(navIsOpen)
  };


  return (
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
  );
};
