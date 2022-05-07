import React from "react";
import "./VideoCard.css";
import { BiDotsVerticalRounded, BiTime } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context/auth-context";

import axios from "axios";
import { useHistory } from "context/history-context/history-context";

export const VideoCard = ({ ...video }) => {
  const addToVideoHistory = async (video) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/history",
        headers: { authorization: auth.token },
        data: { video },
      });
      setHistory(response.data.history);
    } catch (err) {
      console.log(err);
    }
  };

  const { _id, title, duration, thumbnail, views } = video;
  const { auth } = useAuth();
  const { setHistory } = useHistory();

  return (
    <div className="videocard">
      <div className="card card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="card-logo"
            onClick={() => addToVideoHistory(video)}
          />
        </Link>
        <div className="videocard-main">
          <img src={thumbnail} alt="avatar" className="img-md avatar-round" />
          <p className="card-title videocard-title">{title}</p>
        </div>
        <div className="videocard-section">
          <p>
            <BiTime className="videocard-icons" />
            {duration}
          </p>
          <p>
            <AiOutlineEye className="videocard-icons" />
            {views}
          </p>
          <BiDotsVerticalRounded className="text-sm" />
        </div>
      </div>
    </div>
  );
};
