import React from "react";
import "./VideoCard.css";
import { BiDotsVerticalRounded, BiTime } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const VideoCard = ({ _id, title, duration, thumbnail, views }) => {

  return (
    <div className="videocard">
      <div className="card card-vertical">
        <Link to={`/video/${_id}`}>
        <img src={thumbnail} alt={title} className="card-logo" />
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
