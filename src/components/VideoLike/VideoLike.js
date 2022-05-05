import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "context/auth-context/auth-context";
import { Link } from "react-router-dom";
import { useLike } from "context/like-context/like-context";
import "./VideoLike.css";

export const VideoLike = () => {
  const { likedVideos, setLikedVideos } = useLike();

  const { auth } = useAuth();
  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: "/api/user/likes",
        headers: { authorization: auth.token },
      });
      setLikedVideos(response.data.likes);
    })();
  }, [auth.token, setLikedVideos]);

  const removeLikedVideo = (_id) => {
    (async () => {
      const response = await axios.delete(`/api/user/likes/${_id}`, {
        headers: { authorization: auth.token },
      });
      setLikedVideos(response.data.likes);
    })();
  };

  return (
    <div className="video-liked ">
      {likedVideos.length > 0 &&
        likedVideos.map(({ thumbnail, title, description, _id }) => {
          return (
            <div className="card card-horizontal card-video-like" key={_id}>
              <span
                className="remove-liked"
                onClick={() => removeLikedVideo(_id)}
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
