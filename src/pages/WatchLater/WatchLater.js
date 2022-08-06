import React from "react";
import "./WatchLater.css";
import { useSelector } from "react-redux";
import { VideoWatchLater, Sidebar, MobileSidebar } from "components";
import { useTitle } from "hooks/useTitle";
export const WatchLater = () => {
     const { theme } = useSelector((state) => state.theme);
     useTitle("Watch Later | Clipz");
     
  return (
    <div className={`watch-later ${theme}`}>
      <Sidebar />
      <VideoWatchLater />
      <MobileSidebar/>
    </div>
  );
};
