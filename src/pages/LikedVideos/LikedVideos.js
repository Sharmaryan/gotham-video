import React from "react";
import { VideoLike, Sidebar, MobileSidebar } from "components";
import { useSelector } from "react-redux";
import "./LikedVideos.css";
export const LikedVideos = () => {
     const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`liked-videos ${theme}`}>
      <Sidebar />
      <VideoLike />
      <MobileSidebar/>
    </div>
  );
};
