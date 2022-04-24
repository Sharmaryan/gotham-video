import React from "react";
import "./ExploreVideos.css";
export const ExploreVideos = () => {
  return (
    <div className="explore">
      <img
        src="https://cdn.mos.cms.futurecdn.net/Eg4QihAXxpvEYWZH4HZZMS.jpg"
        alt="superhero"
        className="img-responsive img"
      ></img>
      <div className="explore-container">
        <h1 className="explore-heading gray-text">
          watch your favourite super heroes clips
        </h1>

        <button class="btn btn-secondary explore-btn">get started</button>
      </div>
    </div>
  );
};
