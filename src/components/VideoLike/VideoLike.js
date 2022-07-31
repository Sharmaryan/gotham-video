import React from "react";
import { Link } from "react-router-dom";
import "./VideoLike.css";
import { useSelector, useDispatch } from "react-redux";
import { dislikeVideo } from "features/videosSlice";
import { toast } from "react-toastify";
export const VideoLike = () => {
  const { likedVideos } = useSelector((state) => state.videos);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const videoDislikeHandler = (videoId) => {
    dispatch(dislikeVideo({ videoId, auth }))
      .unwrap()
      .then(() => toast.warn("Removed from Liked Videos"));
  };

  return (
    <div className="video-liked ">
      {likedVideos.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      { likedVideos?.map(({ thumbnail, title, _id }) => {
          const videoId = _id;
          return (
            <div className="card card-image" key={_id}>
              <Link to={`/video/${_id}`}>
                <img src={thumbnail} alt={title} className="card-logo" />
              </Link>
              <p className="card-title video-like-title">{title}</p>
              <button
                className="btn btn-success video-like-remove"
                onClick={() => videoDislikeHandler(videoId)}
              >
                remove
              </button>
            </div>
          );
        })}
    </div>
  );
};

