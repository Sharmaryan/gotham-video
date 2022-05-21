import React from 'react'
import './Playlists.css';
import { VideosPlaylists, Sidebar } from 'components';
export const Playlists = () => {
  return (
    <div className='playlists'> <Sidebar/>  <VideosPlaylists/></div>
  )
}

