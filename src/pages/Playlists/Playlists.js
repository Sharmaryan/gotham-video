import React from 'react'
import './Playlists.css';
import {  useSelector } from "react-redux";
import { VideosPlaylists, Sidebar, MobileSidebar } from 'components';
import { useTitle } from 'hooks/useTitle';
export const Playlists = () => {
   const { theme } = useSelector((state) => state.theme);
   useTitle("Playlists | Clipz");
  return (
    <div className={`playlists ${theme}`}> <Sidebar/>  <VideosPlaylists/> <MobileSidebar/> </div>
  )
}

