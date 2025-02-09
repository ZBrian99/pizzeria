import React from "react";
import { Menu } from "../components/Menu";
import { Pricing } from "../components/Pricing";
import { Category } from "../components/Category";
export const MenuPage = () => {
  return (
    <div className="SubPageContainer">
      <Menu className="mTop" />
      <Pricing />
      <Category />
    </div>
  );
};
