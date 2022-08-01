import React from "react";
import "./Playlist.css";
import { VideoSinglePlaylist, Sidebar, MobileSidebar } from "components";
import {  useSelector } from "react-redux";
export const Playlist = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`playlist ${theme}`}>
      <Sidebar /> <VideoSinglePlaylist /> <MobileSidebar />{" "}
    </div>
  );
};
