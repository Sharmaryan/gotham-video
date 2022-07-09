import React, { useEffect } from "react";
import "./VideoSinglePlaylist.css";
import { useParams, Link, } from "react-router-dom";
import { getSinglePlaylist } from "features/videosSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeVideosFromSinglePlaylist, clearAllVideosFromSinglePlaylist } from "features/videosSlice";

export const VideoSinglePlaylist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { playlist } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getSinglePlaylist({ playlistId, auth }));
  }, [auth, dispatch, playlistId]);


  return (
    <div className="video-liked ">
      {/* {playlist.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      {playlist.length > 0 && (
        <button
          className="btn btn-success"
          onClick={() =>
            dispatch(clearAllVideosFromSinglePlaylist({ playlistId, auth }))
          }
        >
          Clear All
        </button>
      )}
      <div className="video-liked-card">
        {playlist?.map(({ thumbnail, title, description, _id }) => {
          return (
            <div className="card card-horizontal card-video-like" key={_id}>
              <span
                className="remove-liked"
                onClick={() =>
                  dispatch(
                    removeVideosFromSinglePlaylist({ playlistId, _id, auth })
                  )
                }
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
        })}
      </div> */}
    </div>
  );
};
