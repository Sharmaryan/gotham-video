import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
import { VideoHistory, Sidebar, MobileSidebar } from "components";
export const History = () => {
     const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${theme} history`}>
      <Sidebar />
      <VideoHistory />
      <MobileSidebar/>
    </div>
  );
};
