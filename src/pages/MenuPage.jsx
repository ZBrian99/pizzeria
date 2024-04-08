import React from "react";
import { Menu } from "../components/Menu";
import { Pricing } from "../components/Pricing";
import { Category } from "../components/Category";
import { Hero } from "../components/Hero";

export const MenuPage = () => {
  return (
    <div className="SubPageContainer">
      <Hero />
      <Menu className="mTop" />
      <Pricing />
      <Category />
    </div>
  );
};
