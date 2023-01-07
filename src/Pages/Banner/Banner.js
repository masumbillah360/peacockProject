import React from "react";
import bannerThumb from "../../assets/bannerThumb.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-thumb">
        {/* https://i.ibb.co/z53BvdV/banner-Thumb.png */}
        <img className="banner-img" src={bannerThumb} alt="" />
      </div>
      <div className="banner-desc">
        <div className="desc-container">
          <h1 className="banner-title">Shiva Lingam</h1>
          <p>
            The roof terrace of Swamiji’s residence is crowned with a huge black
            Shiva lingam, visible from kilometers away. It is the landmark
            devotees look for when they make the pilgrimage to Sidhbari Ashram.{" "}
          </p>
          <p>
            The gardens are a highlight of Sandeepany Himalayas. Especially
            those around the kutia. Swamiji encouraged devotees to bring plants
            from around the world. And there have always been roses. Since the
            beginning, Swamiji’s rose garden was famous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
