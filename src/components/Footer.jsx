import React from "react";
import "../styles/Footer.scss";
import { FooterCard } from "./FooterCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faXTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Section">
        <h3 className="Footer-SectionTitle">ABOUT US</h3>
        <p  className="Footer-SectionDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint recusandae velit porro quibusdam illum?</p>
        <div className="Footer-SectionSocialMediaContainer">
          <button  className="Footer-SocialMedia" ><FontAwesomeIcon icon={faInstagram} /></button>
          <button  className="Footer-SocialMedia"><FontAwesomeIcon icon={faXTwitter} /></button>
          <button  className="Footer-SocialMedia"><FontAwesomeIcon icon={faFacebookF} /></button>
        </div>
      </div>
      <div className="Footer-Section">
        <h3 className="Footer-SectionTitle">RECENT BLOG</h3>
        <FooterCard/>
        <FooterCard/>
      </div>
      <div className="Footer-Section">
        <h3 className="Footer-SectionTitle">SERVICES</h3>
        <a href="#" className="Footer-SectionLink">Cooked</a>
        <a href="#" className="Footer-SectionLink">Delivery</a>
        <a href="#" className="Footer-SectionLink">Quality Foods</a>
        <a href="#" className="Footer-SectionLink">Mixed</a>
      </div>
      <div className="Footer-Section">
        <h3 className="Footer-SectionTitle">HAVE A QUESTIONS?</h3>
        <p  className="Footer-SectionDescription">🔍203 Fake St. Mountain View, San Francisco, California, USA</p>
        <p  className="Footer-SectionDescription">📱+2 392 3929 210</p>
        <p  className="Footer-SectionDescription">✉️info@yourdomain.com</p>
      </div>
      <p  className="Footer-SectionCopy">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam sint minus aut omnis est iste animi a repellat ipsam fugit.</p>
    </div>
  );
};
