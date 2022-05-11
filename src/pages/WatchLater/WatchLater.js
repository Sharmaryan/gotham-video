import React from "react";
import "./WatchLater.css";
import { VideoWatchLater, Sidebar } from "components";
export const WatchLater = () => {
  return (
    <div className="watch-later">
      <Sidebar />
      <VideoWatchLater />
    </div>
  );
};
