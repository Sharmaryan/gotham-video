import React, { useEffect } from "react";
import "./VideosPlaylists.css";
import axios from "axios";
import { useAuth } from "context/auth-context/auth-context";
import { usePlayList } from "context/playlist-context/playlist-context";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export const VideosPlaylists = () => {
  const { auth } = useAuth();
  const { playLists, setPlayLists } = usePlayList();
  

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: "/api/user/playlists",
        headers: { authorization: auth.token },
      });
      setPlayLists(response.data.playlists);
    })();
  }, [auth.token, setPlayLists]);

  return (
    <div className="videos-playlists">
      {playLists.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      {playLists?.map((playlist) => {
        const { title, _id, videos } = playlist;
        return (
          <div className="playlist-card" key={_id}>
            <Link to={`/playlists/${_id}`}>
              {console.log(playlist.videos[0]?.thumbnail)}
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


