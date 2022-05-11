import React from 'react'
import './Playlist.css';
import { VideoSinglePlaylist, Sidebar } from 'components';
export const Playlist = () => {
  return (
    <div className='playlist'><Sidebar/> <VideoSinglePlaylist/></div>
  )
}
