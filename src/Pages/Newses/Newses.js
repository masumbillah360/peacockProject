import React, { useEffect, useState } from "react";
import News from "./News";
import "./newses.css";

const Newses = () => {
  const [collections, setCollections] = useState([]);
  console.log(collections);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:5000/news", {
        headers: {
          "content-type": "application/json",
          authorization:
            "beerar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJCaWxsYWgiLCJpYXQiOjE2NzMxMTQyMjB9.SsEPaowWm0UrbRMpG9GH5lkjLGWdwRlPF-2zHf48fVw",
        },
      });
      const result = await res.json();
      setCollections(result.data);
    };
    getData().catch((err) => console.log(err));
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
        {collections.map((d, idx) => (
          <News key={idx} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Newses;
