import React from "react";
import "./WatchLater.css";
import { useSelector } from "react-redux";
import { VideoWatchLater, Sidebar, MobileSidebar } from "components";
export const WatchLater = () => {
     const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`watch-later ${theme}`}>
      <Sidebar />
      <VideoWatchLater />
      <MobileSidebar/>
    </div>
  );
};
