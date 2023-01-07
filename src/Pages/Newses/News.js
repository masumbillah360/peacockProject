import React from "react";
import { Link } from "react-router-dom";
import "./news.css";

const News = ({ data }) => {
  const { _id, title, thumbnail, category, postDate } = data;
  return (
    <div>
      <div className="card-image-container">
        <img className="card-img" src={thumbnail} alt="" />
        <p className="card-category">{category}</p>
      </div>
      <div className="card-desc">
        <h1 className="card-title">{title}</h1>
        <div className="card-footer">
          <p className="footer-date">{postDate}</p>
          <Link className="card-btn" to={`/news/${_id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
