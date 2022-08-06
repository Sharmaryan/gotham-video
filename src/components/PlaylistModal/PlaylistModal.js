import React, { useState, useRef, useEffect } from "react";
import { createPlaylists } from "features/videosSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideosToPlaylists,
  removeVideosFromPlaylists,
} from "features/videosSlice";
import "./PlaylistModal.css";
import { toast } from "react-toastify";
import {ImCross} from 'react-icons/im';


export const PlaylistModal = ({ singleVideoDetail, setShowModal, showModal }) => {
  const auth = useSelector((state) => state.auth);
  const { playlists } = useSelector((state) => state.videos);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [playListTitle, setPlayListTitle] = useState("");
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showModal && ref.current && !ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal, setShowModal]);

  const handlePlaylistInput = (e) => setPlayListTitle(e.target.value);
  const playlistChangeHandler = (e, _id) => {
    if (e.target.checked) {
      dispatch(addVideosToPlaylists({ _id, singleVideoDetail, auth }))
        .unwrap()
        .then(() => toast.success("Added to playlist"));
    } else {
      const singleVideoId = singleVideoDetail._id;
      const playlistId = _id;
      dispatch(removeVideosFromPlaylists({ playlistId, singleVideoId, auth }))
        .unwrap()
        .then(() => toast.warn("Removed from playlist"));
    }
  };

  const createPlaylistHandler = () => {
    dispatch(createPlaylists({ auth, playListTitle }))
    .unwrap()
    .then(() => toast.success("Playlist Created"));
    setPlayListTitle('');
  };

  return (
    <div className="playlist-modal">
      <div className={`${theme} modal-container`} ref={ref}>
        <div className="modal-close" onClick={() => setShowModal(false)}>
          <ImCross />
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
            className={`${theme} playlist-input`}
            onChange={handlePlaylistInput}
            value={playListTitle}
          />
        </label>
        {playListTitle ? (
          <button className="playlist-btn" onClick={createPlaylistHandler}>
            create
          </button>
        ) : (
          <button className="playlist-btn disable-btn " disabled={true}>create</button>
        )}
      </div>
    </div>
  );
};
