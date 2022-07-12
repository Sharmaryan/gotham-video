import React from "react";
import "./VideoSinglePlaylist.css";
import { useParams, Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  removeVideosFromPlaylists,
  clearAllVideosFromSinglePlaylist,
} from "features/videosSlice";

export const VideoSinglePlaylist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { playlists } = useSelector((state) => state.videos);

  const removeVideoHandler = (_id) => {
    const singleVideoId = _id;
    dispatch(removeVideosFromPlaylists({ playlistId, singleVideoId, auth }));
  };
  
  const singlePlaylist =
    playlists?.filter((playlist) => playlist._id === playlistId)?.[0]?.videos ?? [];


  return (
    <div className="video-liked ">
      {singlePlaylist.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      {singlePlaylist.length > 0 && (
        <button
          className="btn btn-success"
          onClick={() =>
            dispatch(clearAllVideosFromSinglePlaylist({ playlistId, auth })).unwrap().then(navigate('/playlists'))
          }
        >
          Clear All
        </button>
      )}
      <div className="video-liked-card">
        {singlePlaylist.map(
          ({ thumbnail, title, description, _id }) => {
            return (
              <div className="card card-horizontal card-video-like" key={_id}>
                <span
                  className="remove-liked"
                  onClick={() => removeVideoHandler(_id)}
                >
                  x
                </span>
                <Link to={`/video/${_id}`}>
                  <img
                    src={thumbnail}
                    alt={title}
                    className="card-logo card-horizontal-logo"
                  />
                </Link>
                <div className="card-horizontal-content">
                  <p className="card-title limit-text ">{title}</p>
                  <p className="card-desc limit-text">{description}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
