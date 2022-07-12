import React, { useState } from "react";
import { createPlaylists } from "features/videosSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideosToPlaylists,
  removeVideosFromPlaylists,
} from "features/videosSlice";
import "./PlaylistModal.css";

export const PlaylistModal = ({ singleVideoDetail, setShowModal }) => {
  const auth = useSelector((state) => state.auth);
  const { playlists } = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  const [playListTitle, setPlayListTitle] = useState("");

  const handlePlaylistInput = (e) => setPlayListTitle(e.target.value);
  const playlistChangeHandler = (e, _id) => {
    if (e.target.checked) {
      dispatch(addVideosToPlaylists({ _id, singleVideoDetail, auth }));
    } else {
      const singleVideoId = singleVideoDetail._id;
      const playlistId = _id;
      dispatch(removeVideosFromPlaylists({ playlistId, singleVideoId, auth}));
    }
  };

  return (
    <div className="playlist-modal">
      <div className="modal-close" onClick={() => setShowModal(false)}>
        X
      </div>
      {playlists?.map((item) => (
        <div key={item._id}>
          <label htmlFor="playlist-title">
            <input
              type="checkbox"
              checked={item.videos?.some(
                (video) => video._id === singleVideoDetail._id
              )}
              onChange={(e) => playlistChangeHandler(e, item._id)}
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
        onClick={() => dispatch(createPlaylists({ auth, playListTitle }))}
      >
        create
      </button>
    </div>
  );
};
