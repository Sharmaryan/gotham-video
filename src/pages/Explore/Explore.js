import React from "react";
import { VideoCards, VideoCategories, Sidebar, MobileSidebar } from "components";
import { useSelector } from "react-redux";
import { useTitle } from "hooks/useTitle";
import "./Explore.css";
export const Explore = () => {
 const {theme} = useSelector((state) => state.theme);
 useTitle('Explore | Clipz')
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
