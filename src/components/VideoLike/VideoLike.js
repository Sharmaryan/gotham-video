import React from "react";
import { Link } from "react-router-dom";
import "./VideoLike.css";
import { useSelector, useDispatch } from "react-redux";
import { dislikeVideo } from "features/videosSlice";
import { useToast } from "hooks/useToast";
export const VideoLike = () => {
  const { likedVideos } = useSelector((state) => state.videos);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
   const { theme } = useSelector((state) => state.theme);
   const { showToast } = useToast();
  const videoDislikeHandler = (videoId) => {
    dispatch(dislikeVideo({ videoId, auth }))
      .unwrap()
      .then(() => showToast('warn',"Removed from Liked Videos"));
  };

  return (
    <div className={`video-liked ${theme}`}>
      {likedVideos.length === 0 && (
        <div>
          <Link to="/explore" className={`btn btn-explore ${theme}`}>
            Explore Videos
          </Link>
        </div>
      )}
      { likedVideos?.map(({ thumbnail, title, _id }) => {
          const videoId = _id;
          return (
            <div className={`card card-image ${theme}`} key={_id}>
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

