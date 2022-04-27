import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiLike, BiPlayCircle, BiHome, BiHistory } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { CgTimer } from "react-icons/cg";


export const Sidebar = () => {

  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/" className="sidebar-link">
              home
            </Link>
          </span>{" "}
          <BiHome className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/explore" className="sidebar-link">
              Explore
            </Link>
          </span>{" "}
          <MdOutlineExplore className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/playlists" className="sidebar-link">
              Playlists
            </Link>
          </span>{" "}
          <BiPlayCircle className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/watch-later" className="sidebar-link">
              Watch Later
            </Link>
          </span>{" "}
          <CgTimer className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/liked-videos" className="sidebar-link">
              Liked Videos
            </Link>
          </span>{" "}
          <BiLike className="sidebar-icons" />
        </li>
        <li className="sidebar-items">
          <span className="sidebar-text">
            <Link to="/history" className="sidebar-link">
              History
            </Link>
          </span>{" "}
          <BiHistory className="sidebar-icons" />
        </li>
      </ul>
    </div>
  );
};
