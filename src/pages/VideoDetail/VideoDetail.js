import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoDetail.css";

import { BiLike, BiPlayCircle, BiTime } from "react-icons/bi";
import {MdOutlineWatchLater, MdWatchLater} from 'react-icons/md'
import { AiOutlineEye, AiFillLike } from "react-icons/ai";

import { useAuth } from "context/auth-context/auth-context";
import { useLike } from "context/like-context/like-context";
import { useWatchLater } from "context/watch-context/watch-context";

export const VideoDetail = () => {
  const [singleVideoDetail, setSingleVideoDetail] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const { likedVideos, setLikedVideos } = useLike();
  const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();

  const { auth } = useAuth();
  const { videoId } = useParams();
  const { title, views, description, thumbnail, duration, _id, creator } =
    singleVideoDetail ?? {};

  useEffect(() => {
    setIsLiked(likedVideos.find((video) => video._id === videoId));
  }, [videoId, likedVideos]);

  useEffect(() => {
    setIsWatchLater(watchLaterVideos.some((video) => video._id === videoId));
  }, [videoId, watchLaterVideos]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setSingleVideoDetail(response.data.video);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [videoId]);

  const likeVideo = async () => {
    try {
      setIsLiked(true);
      await axios({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const unLikeVideo = (_id) => {
    setIsLiked(false);
    (async () => {
      const response = await axios.delete(`/api/user/likes/${_id}`, {
        headers: { authorization: auth.token },
      });
      setLikedVideos(response.data.likes);
    })();
  };

  const watchLater = async () => {
    setIsWatchLater(true);
    try {
      await axios({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeWatchLater = (_id) => {
    setIsWatchLater(false);
    (async () => {
      const response = await axios.delete(`/api/user/watchlater/${_id}`, {
        headers: { authorization: auth.token },
      });
      setWatchLaterVideos(response.data.watchlater);
    })();
  };

  return (
    <div className="video-detail">
      {singleVideoDetail && (
        <div className="video-container">
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${_id}`}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
          <div className="video-title">{title}</div>
          <div className="video-main">
            <div className="video-views video">
              <AiOutlineEye className="video-icons" />
              <span className="video-icon-title"> {views}</span>
            </div>
            <div className="video-duration video">
              <BiTime className="video-icons" />
              <span className="video-icon-title"> {duration}</span>
            </div>
            {isLiked ? (
              <div className="video-like video">
                <AiFillLike
                  className="video-icons icon-color"
                  onClick={() => unLikeVideo(_id)}
                />
                <span className="video-icon-title">liked</span>
              </div>
            ) : (
              <div className="video-like video">
                <BiLike className="video-icons" onClick={likeVideo} />
                <span className="video-icon-title">like</span>
              </div>
            )}
            {isWatchLater ? (
              <div className="video-later video">
                <MdWatchLater
                  className="video-icons"
                  onClick={() => removeWatchLater(_id)}
                />
                <span className="video-icon-title">added</span>
              </div>
            ) : (
              <div className="video-later video">
                <MdOutlineWatchLater className="video-icons" onClick={watchLater} />
                <span className="video-icon-title">watch later</span>
              </div>
            )}

            <div className="video-playlist video">
              <BiPlayCircle className="video-icons" />{" "}
              <span className="video-icon-title">add to playlist</span>
            </div>
          </div>
          <div className="video-avatar-creator">
            <img src={thumbnail} alt="avatar" className="img-md avatar-round" />
            <div className="video-creator">{creator}</div>
          </div>
          <div className="video-desc">{description}</div>
        </div>
      )}
    </div>
  );
};
