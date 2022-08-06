import React, { useEffect, useState } from "react";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import { BiLike, BiPlayCircle, BiTime } from "react-icons/bi";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import { PlaylistModal, Sidebar, MobileSidebar } from "components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./VideoDetail.css";
import {
  likeVideo,
  dislikeVideo,
  removeWatchLater,
  watchLater,
} from "features/videosSlice";
import { toast } from "react-toastify";
import { useTitle } from "hooks/useTitle";

export const VideoDetail = () => {
  const [singleVideoDetail, setSingleVideoDetail] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const auth = useSelector((state) => state.auth);
  const { likedVideos, watchLaterVideos } = useSelector(
    (state) => state.videos
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { title, views, description, thumbnail, duration, _id, creator } =
    singleVideoDetail ?? {};
  const {theme} = useSelector((state) => state.theme);
  useTitle("Video | Clipz");

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

  const likeVideosHandler = () => {
    auth.user
      ? dispatch(likeVideo({ auth, singleVideoDetail }))
          .unwrap()
          .then(() => toast.success("Added to Liked Videos"))
      : navigate("/login",{ state: { from : location } });
  };
  const unlikeVideosHandler = () => {
    dispatch(dislikeVideo({ videoId, auth }))
      .unwrap()
      .then(() => toast.warn("Removed from Liked Videos"));
  };

  const watchLaterHandler = () => {
    auth.user
      ? dispatch(watchLater({ auth, singleVideoDetail }))
          .unwrap()
          .then(() => toast.success("Added to Watch Later"))
      : navigate("/login", { state: { from: location } });
  };
  const removeWatchLaterHandler = () => {
    dispatch(removeWatchLater({ videoId, auth }))
      .unwrap()
      .then(() => toast.warn(" Removed from Watch Later"));
  };

  return (
    <div className={`video-detail ${theme}`}>
      <Sidebar />
      {singleVideoDetail && (
        <div className={`video-container ${theme}`}>
          {showModal && (
            <PlaylistModal
              singleVideoDetail={singleVideoDetail}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )}
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${_id}`}
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
          <div className="video-title px-2">{title}</div>
          <div className="video-main px-2">
            <div className="video-views video">
              <AiOutlineEye className="video-icons" />
              <span className="video-icon-title"> {views}</span>
            </div>
            <div className="video-duration video">
              <BiTime className="video-icons" />
              <span className="video-icon-title"> {duration}</span>
            </div>

            {likedVideos.some((video) => video._id === videoId) ? (
              <div className="video-like video" onClick={unlikeVideosHandler}>
                <AiFillLike className="video-icons" />
                <span className="video-icon-title hide-video-title">
                  unlike
                </span>
              </div>
            ) : (
              <div className="video-like video" onClick={likeVideosHandler}>
                <BiLike className="video-icons" />
                <span className="video-icon-title hide-video-title">like</span>
              </div>
            )}

            {watchLaterVideos.some((video) => video._id === videoId) ? (
              <div
                className="video-later video"
                onClick={removeWatchLaterHandler}
              >
                <MdWatchLater className="video-icons" />
                <span className="video-icon-title hide-video-title">
                  watch later
                </span>
              </div>
            ) : (
              <div className="video-later video" onClick={watchLaterHandler}>
                <MdOutlineWatchLater className="video-icons" />
                <span className="video-icon-title hide-video-title">
                  watch later
                </span>
              </div>
            )}

            <div
              className="video-playlist video"
              onClick={() =>
                auth.user ? setShowModal(true) : navigate("/login",{ state: { from : location } })
              }
            >
              <BiPlayCircle className="video-icons" />{" "}
              <span className="video-icon-title hide-video-title">
                playlist
              </span>
            </div>
          </div>
          <div className="video-avatar-creator px-1">
            <img src={thumbnail} alt="avatar" className="img-md avatar-round" />
            <div className="video-creator">{creator}</div>
          </div>
          <div className="video-desc px-2">{description}</div>
        </div>
      )}
      <MobileSidebar />
    </div>
  );
};
