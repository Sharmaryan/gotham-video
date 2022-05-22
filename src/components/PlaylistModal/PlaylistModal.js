import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, usePlayList } from "context";
import { addAndDeleteFromPlaylist, createPlaylist } from "services";
import "./PlaylistModal.css";
import { toast } from "react-toastify";
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
      {playLists?.map(({ title, _id }) => (
        <div key={_id}>
          <label htmlFor="playlist-title">
            <input
              type="checkbox"
              onChange={(e) =>
                addAndDeleteFromPlaylist(e, _id, singleVideoDetail, auth, toast)
              }
            />
            <span className="playlists-title">{title}</span>
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
          createPlaylist(auth, playListTitle, setPlayLists, navigate, toast)
        }
      >
        create
      </button>
    </div>
  );
};
