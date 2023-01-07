import React from "react";
import News from "./News";
import "./newses.css";

const Newses = () => {
  return (
    <div className="news-container">
      <div className="page-header">
        <h1 className="banner-title">Most Read News</h1>
        <a className="card-btn" href="/">
          See All
        </a>
      </div>
      <div className="card-container">
        {[...Array(8)].map((d, idx) => (
          <News key={idx} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Newses;
