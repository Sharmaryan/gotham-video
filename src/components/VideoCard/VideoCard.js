import React from "react";
import { Link} from "react-router-dom";
import { useAuth, useHistory } from "context";
import {addVideoToHistory} from '../../services'
import "./VideoCard.css";

export const VideoCard = ({ ...video }) => {
  const { _id, title,  thumbnail} = video;
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
            onClick={() => addVideoToHistory(video, auth, setHistory)}
          />
        </Link>
        <div className="videocard-main">
          <img src={thumbnail} alt="avatar" className="img-md avatar-round" />
          <p className="card-title videocard-title">{title}</p>
        </div>
      </div>
    </div>
  );
};
