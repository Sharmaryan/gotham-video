import React from "react";
import "./ExploreVideos.css";
import {Link} from 'react-router-dom';
export const ExploreVideos = () => {
  return (
    <div className="explore-section">
      <img
        src="https://im.indiatimes.in/content/2022/Mar/black-panther_623477cb33319.jpg?w=725&h=544&cc=1"
        alt="superhero"
        className="img-responsive img"
      ></img>
      <div className="explore-section-main">
        <h1 className="explore-heading gray-text">
          watch your favourite super heroes clips
        </h1>

        <button className="btn btn-secondary explore-btn">
          <Link to="/explore" className="text-white">
            get started
          </Link>
        </button>
      </div>
    </div>
  );
};
