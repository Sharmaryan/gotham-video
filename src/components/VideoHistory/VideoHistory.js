import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./VideoHistory.css";
import {
  removeVideoFromHistory,
  clearAllVideosFromHistory,
} from "features/videosSlice";
import { useToast } from "hooks/useToast";

export const VideoHistory = () => {
  const { historyVideos } = useSelector((state) => state.videos);
  const auth = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
const { showToast } = useToast();
  const removeVideoFromHistoryHandler = (_id) => {
    dispatch(removeVideoFromHistory({ _id, auth }))
      .unwrap()
      .then(() => showToast('warn',"Video Removed"));
  };

  const clearAllVideosFromHistoryHandler = () => {
    dispatch(clearAllVideosFromHistory(auth))
      .unwrap()
      .then(() => showToast('warn',"History Cleared"));
  };

  return (
    <div className={`${theme} video-history`}>
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
          <Link to="/explore" className={`${theme} btn btn-explore`}>
            Explore Videos
          </Link>
        </div>
      )}
      <div className={`${theme} video-history-card`}>
        {historyVideos.length > 0 &&
          historyVideos.map(({ thumbnail, title, _id }) => {
            return (
              <div className={`${theme} card card-image`} key={_id}>
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
