import React from 'react'
import { Category } from "../components/Category";
import { ContactUs } from "../components/ContactUs";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Menu } from "../components/Menu";
import { News } from "../components/News";
import { Pricing } from "../components/Pricing";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Welcome } from "../components/Welcome";
import '../styles/pages/HomePage.scss';
export const HomePage = () => {
  console.log('first')
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
