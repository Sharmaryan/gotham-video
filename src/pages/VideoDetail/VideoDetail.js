import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./VideoDetail.css";
import { BiLike, BiPlayCircle, BiTime } from "react-icons/bi";
import { CgTimer } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const [singleVideoDetail, setSingleVideoDetail] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        console.log(response.data.video);
        setSingleVideoDetail(response.data.video);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [videoId]);
  const { title, views, description,thumbnail, duration, _id, creator } = singleVideoDetail ?? {};

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

            <div className="video-like video">
              <BiLike className="video-icons" />{" "}
              <span className="video-icon-title">like</span>
            </div>
            <div className="video-later video">
              <CgTimer className="video-icons" />
              <span className="video-icon-title">watch later</span>
            </div>
            <div className="video-playlist video">
              <BiPlayCircle className="video-icons" />{" "}
              <span className="video-icon-title">add to playlist</span>
            </div>
          </div>
          <div className="video-avatar-creator">
            <img src={thumbnail} alt="avatar" className="img-md avatar-round" />
            <div className="video-creator">{creator}</div>
          </div>
          <div className="video-desc">
            {description}
          </div>
        </div>
        
      )}
    </div>
  );
};
