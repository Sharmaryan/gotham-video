import React from "react";
import { VideoCards, VideoCategories, Sidebar, MobileSidebar } from "components";
import { useSelector } from "react-redux";
import "./Explore.css";
export const Explore = () => {
 const {theme} = useSelector((state) => state.theme);
  return (
    <div className={`explore-container ${theme}`}>
      <Sidebar />
      <div className={`explore-main ${theme}`}>

      <VideoCategories />
      <VideoCards />
      </div>
      <MobileSidebar/>
    </div>
  );
};
