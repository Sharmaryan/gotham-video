import React from "react";
import "./VideoWatchLater.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeWatchLater } from "features/videosSlice";
import {toast} from 'react-toastify';
export const VideoWatchLater = () => {
  
const {watchLaterVideos} = useSelector((state) => state.videos);
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();

const removeWatchLaterHandler = (videoId) => {
  dispatch(removeWatchLater({ videoId, auth })).unwrap().then(() => toast.warn('Removed from Watch Later'));
}

  return (
    <div className="video-watch-later">
      {watchLaterVideos.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      {watchLaterVideos.length > 0 &&
        watchLaterVideos.map(({ thumbnail, title, _id }) => {
          const videoId = _id;
          return (
            <div className="card card-image" key={_id}>
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
