import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, usePlayList } from "context";
import { addAndDeleteFromPlaylist, createPlaylist } from "services";
import "./PlaylistModal.css";

export const PlaylistModal = ({ singleVideoDetail, setShowModal }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { playLists, setPlayLists } = usePlayList();
  const [playListTitle, setPlayListTitle] = useState("");
  
  const handlePlaylistInput = (e) => setPlayListTitle(e.target.value);

  return (
    <div className="playlist-modal">
      <div className="modal-close" onClick={() => setShowModal(false)}>
        X
      </div>
      {playLists?.map((item) => (
        
        <div key={item._id}>
          <label htmlFor="playlist-title">
            <input
              type="checkbox"
              checked={item.videos?.some((el) => el._id === singleVideoDetail._id  )}
              onChange={(e) =>
                addAndDeleteFromPlaylist(
                  e,
                  item._id,
                  singleVideoDetail,
                  auth,
                  
                  setPlayLists,
                  playLists
                )
              }
            />
            <span className="playlists-title">{item.title}</span>
          </label>
        </div>
      ))}
      <label htmlFor="playlist">
        <input
          type="text"
          placeholder="create playlist"
          id="playlist"
          className="playlist-input"
          onChange={handlePlaylistInput}
        />
      </label>
      <button
        className="playlist-btn"
        onClick={() =>
          createPlaylist(auth, playListTitle, setPlayLists, navigate)
        }
      >
        create
      </button>
    </div>
  );
};
