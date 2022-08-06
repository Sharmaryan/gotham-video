import React from "react";
import "./VideoSinglePlaylist.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeVideosFromPlaylists,
  clearAllVideosFromSinglePlaylist,
} from "features/videosSlice";
import { useToast } from "hooks/useToast";

export const VideoSinglePlaylist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const { playlists } = useSelector((state) => state.videos);
  const { showToast } = useToast();

  const removeVideoHandler = (_id) => {
    const singleVideoId = _id;
    dispatch(removeVideosFromPlaylists({ playlistId, singleVideoId, auth }))
      .unwrap()
      .then(() => showToast('warn',"Removed from playlist"));
  };

  const clearAllVideosHandler = () => {
    dispatch(clearAllVideosFromSinglePlaylist({ playlistId, auth }))
      .unwrap()
      .then(() => {
        navigate("/playlists");
        showToast('warn',"Playlist Deleted");
      });
  };

  const singlePlaylist =
    playlists?.filter((playlist) => playlist._id === playlistId)?.[0]?.videos ??
    [];

  return (
    <div className="video-single-playlists ">
      {singlePlaylist.length === 0 && (
        <div>
          <Link to="/explore" className={`${theme}btn btn-explore`}>
            Explore Videos
          </Link>
        </div>
      )}
      {singlePlaylist.length > 0 && (
        <button className="btn btn-success" onClick={clearAllVideosHandler}>
          Clear All
        </button>
      )}
      <div className={`single-playlist-card ${theme}`}>
        {singlePlaylist.map(({ thumbnail, title, _id }) => {
          return (
           
             <div className={`card card-image ${theme}`} key={_id}>
                <Link to={`/video/${_id}`}>
                  <img src={thumbnail} alt={title} className="card-logo" />
                </Link>
                <p className="card-title single-playlist-title">{title}</p>
                <button
                  className="btn btn-success single-playlist-remove"
                  onClick={() => removeVideoHandler(_id)}
                >
                  remove
                </button>
              </div>
          );
        })}
      </div>
    </div>
  );
};


