import React from "react";
import "./VideoWatchLater.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeWatchLater } from "features/videosSlice";
import { useToast } from "hooks/useToast";
export const VideoWatchLater = () => {
  const { watchLaterVideos } = useSelector((state) => state.videos);
  const auth = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const removeWatchLaterHandler = (videoId) => {
    dispatch(removeWatchLater({ videoId, auth }))
      .unwrap()
      .then(() => showToast("warn", "Removed from Watch Later"));
  };

  return (
    <div className={`${theme} video-watch-later`}>
      {watchLaterVideos.length === 0 && (
        <div>
          <Link to="/explore" className={`btn btn-explore ${theme}`}>
            Explore Videos
          </Link>
        </div>
      )}
      {watchLaterVideos.length > 0 &&
        watchLaterVideos.map(({ thumbnail, title, _id }) => {
          const videoId = _id;
          return (
            <div className={`${theme} card card-image`} key={_id}>
              <Link to={`/video/${_id}`}>
                <img src={thumbnail} alt={title} className="card-logo" />
              </Link>
              <p className="card-title watch-later-title">{title}</p>
              <button
                className="btn btn-success watch-later-remove"
                onClick={() => removeWatchLaterHandler(videoId)}
              >
                remove
              </button>
            </div>
          );
        })}
    </div>
  );
};
