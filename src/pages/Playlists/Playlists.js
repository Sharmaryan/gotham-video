import React from 'react'
import './Playlists.css';
import {  useSelector } from "react-redux";
import { VideosPlaylists, Sidebar, MobileSidebar } from 'components';
export const Playlists = () => {
   const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`playlists ${theme}`}> <Sidebar/>  <VideosPlaylists/> <MobileSidebar/> </div>
  )
}

