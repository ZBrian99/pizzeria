import React from "react";
import "../styles/NewsCard.scss";
export const NewsCard = ({
  imagen = "src/assets/news/image_1.jpg",
  title = "lorem",
  description = "loremDescription",
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
