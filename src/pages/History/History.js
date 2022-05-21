import React from "react";
import "./History.css";
import { VideoHistory, Sidebar } from "components";
export const History = () => {
  return (
    <div className="history">
      <Sidebar />
      <VideoHistory />
    </div>
  );
};
