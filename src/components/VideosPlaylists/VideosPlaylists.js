import React, { useEffect } from "react";
import "./VideosPlaylists.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "features/videosSlice";

export const VideosPlaylists = () => {
  const {playlists}  = useSelector((state) => state.videos);
  
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
   const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(getPlaylists({auth}));
  }, [dispatch, auth]);

  return (
    <div className= {`${theme} videos-playlists`}>
      {playlists?.length === 0 && (
        <div>
          <Link to="/explore" className={`btn btn-explore ${theme}`}>
            Explore Videos
          </Link>
        </div>
      )}
      {playlists?.map((playlist) => {
        const { title, _id, videos } = playlist;
        return (
          <div className={`${theme} playlist-card`} key={_id}>
            <Link to={`/playlists/${_id}`}>
              <img
                className="playlist-image"
                src={
                  playlist.videos[0]?.thumbnail ||
                  "https://www.kindpng.com/picc/m/82-823615_video-resume-play-video-icon-png-transparent-png.png"
                }
                alt={title}
              />
              <div className="playlist-side">
                <div className="playlist-count">{videos.length}</div>

                <AiOutlinePlayCircle className="playlist-icon" />
              </div>
              <div className="playlist-title">{title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
