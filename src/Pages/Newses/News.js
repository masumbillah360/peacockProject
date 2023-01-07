import React from "react";
import cardImage from "../../assets/card-img.png";
import "./news.css";

const News = () => {
  return (
    <div>
      <div>
        <img className="card-img" src={cardImage} alt="" />
      </div>
      <div className="card-desc">
        <h1 className="card-title">
          National Science Day at Chinmaya Degree College
        </h1>
        <div className="card-footer">
          <p className="footer-date">19th Nov 2021</p>
          <a className="card-btn" href="/">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
