import React from "react";
import "./Playlist.css";
import { VideoSinglePlaylist, Sidebar, MobileSidebar } from "components";
export const Playlist = () => {
  return (
    <div className="playlist">
      <Sidebar /> <VideoSinglePlaylist /> <MobileSidebar />{" "}
    </div>
  );
};
