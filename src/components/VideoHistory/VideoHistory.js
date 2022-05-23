import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "context/auth-context/auth-context";
import { useHistory } from "context/history-context/history-context";
import { Link } from "react-router-dom";
import { clearAllHistory, removeFromHistory } from "services";
import "./VideoHistory.css";
export const VideoHistory = () => {
  const { auth } = useAuth();
  const { history, setHistory } = useHistory();

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: "get",
        url: "/api/user/history",
        headers: { authorization: auth.token },
      });
      setHistory(response.data.history);
    })();
  }, [auth.token, setHistory]);



  return (
    <div className="video-history">
      {history.length > 0 && (
        <button
          className="btn btn-success"
          onClick={() => clearAllHistory(setHistory, auth)}
        >
          Clear All
        </button>
      )}
      {history.length === 0 && (
        <div>
          There is no videos here{" "}
          <Link to="/explore" className="btn btn-explore">
            Explore Videos
          </Link>
        </div>
      )}
      <div className="video-history-card">
        {history.length > 0 &&
          history.map(({ thumbnail, title, _id }) => {
            return (
              <div className="card card-image" key={_id}>
                <Link to={`/video/${_id}`}>
                  <img src={thumbnail} alt={title} className="card-logo" />
                </Link>
                <p className="card-title history-title">{title}</p>
                <button
                  className="btn btn-success history-remove"
                  onClick={() => removeFromHistory(_id, auth, setHistory)}
                >
                  remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
