import React from "react";
import { VideoLike, Sidebar, MobileSidebar } from "components";
import "./LikedVideos.css";
export const LikedVideos = () => {
  return (
    <div className="liked-videos">
      <Sidebar />
      <VideoLike />
      <MobileSidebar/>
    </div>
  );
};
