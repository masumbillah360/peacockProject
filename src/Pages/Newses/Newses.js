import React, { useEffect, useState } from "react";
import News from "./News/News";
import "./newses.css";

const Newses = () => {
  const [collections, setCollections] = useState([]);
  console.log(collections);
  useEffect(() => {
    fetch("https://peacock-server.vercel.app/news", {
      headers: {
        "content-type": "application/json",
        authorization: `beerar ${localStorage.getItem("secrete-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCollections(data.data));
  }, []);
  return (
    <div className="news-container">
      <div className="page-header">
        <h3 className="banner-title">Most Read News</h3>
        <a className="card-btn" href="/">
          See All
        </a>
      </div>
      <div className="card-container">
        {collections.map((d) => (
          <News key={d._id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Newses;
