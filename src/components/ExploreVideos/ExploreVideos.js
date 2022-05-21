import React from "react";
import "./ExploreVideos.css";
import {Link} from 'react-router-dom';
export const ExploreVideos = () => {
  return (
    <div className="explore-section">
      <img
        src="https://cdn.mos.cms.futurecdn.net/Eg4QihAXxpvEYWZH4HZZMS.jpg"
        alt="superhero"
        className="img-responsive img"
      ></img>
      <div className="explore-section-main">
        <h1 className="explore-heading gray-text">
          watch your favourite super heroes clips
        </h1>

        <button className="btn btn-secondary explore-btn"><Link to='/explore' className="text-white">get started</Link></button>
      </div>
    </div>
  );
};
