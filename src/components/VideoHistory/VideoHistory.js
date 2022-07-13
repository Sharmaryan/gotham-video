import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./VideoHistory.css";
import {
  removeVideoFromHistory,
  clearAllVideosFromHistory,
} from "features/videosSlice";
import { toast } from "react-toastify";
export const VideoHistory = () => {
  const { historyVideos } = useSelector((state) => state.videos);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const removeVideoFromHistoryHandler = (_id) => {
    dispatch(removeVideoFromHistory({ _id, auth }))
      .unwrap()
      .then(() => toast.warn("Video Removed"));
  };

  const clearAllVideosFromHistoryHandler = () => {
    dispatch(clearAllVideosFromHistory(auth))
      .unwrap()
      .then(() => toast.warn("History Cleared"));
  };

  return (
    <div className="video-history">
      {historyVideos.length > 0 && (
        <button
          className="btn btn-success"
          onClick={clearAllVideosFromHistoryHandler}
        >
          Clear All
        </button>
      )}
      {historyVideos.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      <div className="video-history-card">
        {historyVideos.length > 0 &&
          historyVideos.map(({ thumbnail, title, _id }) => {
            return (
              <div className="card card-image" key={_id}>
                <Link to={`/video/${_id}`}>
                  <img src={thumbnail} alt={title} className="card-logo" />
                </Link>
                <p className="card-title history-title">{title}</p>
                <button
                  className="btn btn-success history-remove"
                  onClick={() => removeVideoFromHistoryHandler(_id)}
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
