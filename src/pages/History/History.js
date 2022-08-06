import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
import { VideoHistory, Sidebar, MobileSidebar } from "components";
import { useTitle } from "hooks/useTitle";
export const History = () => {
  const { theme } = useSelector((state) => state.theme);
  useTitle("History | Clipz");
  return (
    <div className={`${theme} history`}>
      <Sidebar />
      <VideoHistory />
      <MobileSidebar />
    </div>
  );
};
