import React from "react";
import "./History.css";
import { VideoHistory, Sidebar, MobileSidebar } from "components";
export const History = () => {
  return (
    <div className="history">
      <Sidebar />
      <VideoHistory />
      <MobileSidebar/>
    </div>
  );
};
