import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiLike, BiPlayCircle, BiTime } from "react-icons/bi";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import { PlaylistModal, Sidebar } from "components";
import { useAuth, useLike, useWatchLater } from "context";
import {
  likeVideo,
  unLikeVideo,
  addToWatchLater,
  removeFromWatchLater,
} from "services";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./VideoDetail.css"

export const VideoDetail = () => {
  const [singleVideoDetail, setSingleVideoDetail] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { likedVideos, setLikedVideos } = useLike();
  const { watchLaterVideos, setWatchLaterVideos } = useWatchLater();
  

  const { auth } = useAuth();
  const { videoId } = useParams();
  const navigate = useNavigate();
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

  return (
    <div className="video-detail">
      <Sidebar />
      {singleVideoDetail && (
        <div className="video-container">
          {showModal && (
            <PlaylistModal
              singleVideoDetail={singleVideoDetail}
              setShowModal={setShowModal}
            />
          )}
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
              <div
                className="video-like video"
                onClick={() =>
                  unLikeVideo(_id, setIsLiked, setLikedVideos, auth)
                }
              >
                <AiFillLike className="video-icons" />
                <span className="video-icon-title">liked</span>
              </div>
            ) : (
              <div
                className="video-like video"
                onClick={() =>
                  likeVideo(
                    auth,
                    navigate,
                    setIsLiked,
                    singleVideoDetail,
                    setLikedVideos
                  )
                }
              >
                <BiLike className="video-icons" />
                <span className="video-icon-title">like</span>
              </div>
            )}
            {isWatchLater ? (
              <div
                className="video-later video"
                onClick={() =>
                  removeFromWatchLater(
                    _id,
                    setIsWatchLater,
                    setWatchLaterVideos,
                    auth
                  )
                }
              >
                <MdWatchLater className="video-icons" />
                <span className="video-icon-title">watch later</span>
              </div>
            ) : (
              <div
                className="video-later video"
                onClick={() =>
                  addToWatchLater(
                    auth,
                    navigate,
                    setIsWatchLater,
                    setWatchLaterVideos,
                    singleVideoDetail
                  )
                }
              >
                <MdOutlineWatchLater className="video-icons" />
                <span className="video-icon-title">watch later</span>
              </div>
            )}

            <div
              className="video-playlist video"
              onClick={() => setShowModal(true)}
            >
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
