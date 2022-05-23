import React, { useEffect } from "react";
import "./VideoSinglePlaylist.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSinglePlayList, useAuth } from "context";
import axios from "axios";
import { removeFromPlaylist, clearSinglePlaylist } from "services";
import { toast } from "react-toastify";

export const VideoSinglePlaylist = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { singlePlayList, setSinglePlayList } = useSinglePlayList();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: { authorization: auth.token },
        });
        setSinglePlayList(response.data.playlist.videos);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [playlistId, auth.token, setSinglePlayList]);

  return (
    <div className="video-liked ">
      {singlePlayList.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      {singlePlayList.length > 0 && (
        <button
          className="btn btn-success"
          onClick={() =>
            clearSinglePlaylist(playlistId, auth, setSinglePlayList, navigate)
          }
        >
          Clear All
        </button>
      )}
      <div className="video-liked-card">
        {singlePlayList?.map(({ thumbnail, title, description, _id }) => {
          return (
            <div className="card card-horizontal card-video-like" key={_id}>
              <span
                className="remove-liked"
                onClick={() =>
                  removeFromPlaylist(
                    _id,
                    auth,
                    setSinglePlayList,
                    playlistId,
                    toast
                  )
                }
              >
                x
              </span>
              <Link to={`/video/${_id}`}>
                <img
                  src={thumbnail}
                  alt={title}
                  className="card-logo card-horizontal-logo"
                />
              </Link>
              <div className="card-horizontal-content">
                <p className="card-title limit-text ">{title}</p>
                <p className="card-desc limit-text">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
