import React from 'react'
import './Playlists.css';
import { VideosPlaylists, Sidebar, MobileSidebar } from 'components';
export const Playlists = () => {
  return (
    <div className='playlists'> <Sidebar/>  <VideosPlaylists/> <MobileSidebar/> </div>
  )
}

