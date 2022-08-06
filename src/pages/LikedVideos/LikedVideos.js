import React from "react";
import { VideoLike, Sidebar, MobileSidebar } from "components";
import { useSelector } from "react-redux";
import "./LikedVideos.css";
import { useTitle } from "hooks/useTitle";
export const LikedVideos = () => {
     const { theme } = useSelector((state) => state.theme);
     useTitle("Liked | Clipz");
  return (
    <div className={`liked-videos ${theme}`}>
      <Sidebar />
      <VideoLike />
      <MobileSidebar/>
    </div>
  );
};
