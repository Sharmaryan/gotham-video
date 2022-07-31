import React from "react";
import "./WatchLater.css";
import { VideoWatchLater, Sidebar, MobileSidebar } from "components";
export const WatchLater = () => {
  return (
    <div className="watch-later">
      <Sidebar />
      <VideoWatchLater />
      <MobileSidebar/>
    </div>
  );
};
