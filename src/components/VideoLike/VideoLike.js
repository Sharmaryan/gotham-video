import React from "react";
import { Link } from "react-router-dom";
import "./VideoLike.css";
import { useSelector, useDispatch } from "react-redux";
import { dislikeVideo } from "features/videosSlice";
export const VideoLike = () => {

const {likedVideos} = useSelector((state) => state.videos);
const auth = useSelector((state) => state.auth)
const dispatch = useDispatch();

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
      {likedVideos.length > 0 &&
        likedVideos.map(({ thumbnail, title, description, _id }) => {
          const videoId = _id;
          return (
            <div className="card card-horizontal card-video-like" key={_id}>
              <span
                className="remove-liked"
                onClick={() => dispatch(dislikeVideo({videoId, auth}))}
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
    </div>
  );
};
