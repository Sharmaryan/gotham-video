import React from "react";
import { Link} from "react-router-dom";
import "./VideoCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addVideoToHistory } from "features/videosSlice";

export const VideoCard = ({ ...video }) => {
  const { _id, title,  thumbnail} = video;
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch(); 

  return (
    <div className="videocard">
      <div className="card card-vertical">
        <Link to={`/video/${_id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="card-logo"
            onClick={() => dispatch(addVideoToHistory({auth, video}))}
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
