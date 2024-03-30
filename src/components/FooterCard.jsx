import React from 'react'
import "../styles/FooterCard.scss";
export const FooterCard = ({
    imagen = "src/assets/news/image_1.jpg",
    title = "lorem",
    date = "Sept 10, 2018",
    owner = "Admin",
    comments = "3",
    className="",
  }) => {
    return (
      <div className={`FooterCard ${className}`}>
        <div className="FooterCard-ImageContainer">
          <img src={imagen} alt="" className="FooterCard-Image" />
        </div>
        <div className="FooterCard-Info">
        <h3 className="FooterCard-Title">{title}</h3>
          <span className="FooterCard-Date">{date}</span>
          <span className="FooterCard-Owner">{owner}</span>
          <span className="FooterCard-Comments">{`☺ ${comments}`}</span>
        </div>
      </div>
    );
  };
  