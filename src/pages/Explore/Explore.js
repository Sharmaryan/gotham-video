import React from "react";
import { VideoCards, VideoCategories } from "../../components/index";
import './Explore.css';
export const Explore = () => {
  return (
    <div className="video-container">
      <VideoCategories />
      <VideoCards />
    </div>
  );
};
