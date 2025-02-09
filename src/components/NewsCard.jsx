import React from "react";
import "../styles/components/NewsCard.scss";
export const NewsCard = ({
  imagen = "/assets/news/image_1.jpg",
  title = "Especial Pizza",
  description = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  date = "Sept 10, 2018", 
  owner = "Admin",
  comments = "3",
  className="",
}) => {
  return (
    <div className={`NewsCard ${className}`}>
      <div className="NewsCard-ImageContainer">
        <img src={imagen} alt="" className="NewsCard-Image" />
      </div>
      <div className="NewsCard-Info">
        <span className="NewsCard-Date">{date}</span>
        <span className="NewsCard-Owner">{owner}</span>
        <span className="NewsCard-Comments">{`☺ ${comments}`}</span>
      </div>
      <h3 className="NewsCard-Title">{title}</h3>
      <p className="NewsCard-Description">{description}</p>
    </div>
  );
};
