import React from "react";
import "./Playlist.css";
import { VideoSinglePlaylist, Sidebar, MobileSidebar } from "components";
import {  useSelector } from "react-redux";
import { useTitle } from "hooks/useTitle";
export const Playlist = () => {
  const { theme } = useSelector((state) => state.theme);
  useTitle("Playlist | Clipz");
  return (
    <div className={`playlist ${theme}`}>
      <Sidebar /> <VideoSinglePlaylist /> <MobileSidebar />{" "}
    </div>
  );
};
