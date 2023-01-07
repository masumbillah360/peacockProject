import React from "react";
import "./news.css";

const News = ({ data }) => {
  const { title, thumbnail, category, postDate } = data;
  return (
    <div>
      <div>
        <img className="card-img" src={thumbnail} alt="" />
      </div>
      <div className="card-desc">
        <h1 className="card-title">{title}</h1>
        <div className="card-footer">
          <p className="footer-date">{postDate}</p>
          <a className="card-btn" href="/">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
