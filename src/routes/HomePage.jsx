import React from 'react'
import { Carousel } from "../components/Carousel";
import { Category } from "../components/Category";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Menu } from "../components/Menu";
import { News } from "../components/News";
import { Pricing } from "../components/Pricing";

import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Welcome } from "../components/Welcome";
export const HomePage = () => {
  return (
    
    <div className="HomePage">
    <Hero/>
    
    <Info/>
    <Welcome />
    <Services />
    <Menu />
    <Pricing />
    <Stats />
    <Category />
    <News />
    <ContactUs />

  </div>
  )
}
