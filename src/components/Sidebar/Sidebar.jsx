import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BiLike, BiPlayCircle, BiHome, BiHistory } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { CgTimer } from "react-icons/cg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link">
            <span className="sidebar-text">home</span>{" "}
            <BiHome className="sidebar-icons" />
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/explore" className="sidebar-link">
            <span className="sidebar-text">Explore</span>{" "}
            <MdOutlineExplore className="sidebar-icons" />
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/playlists" className="sidebar-link">
            <span className="sidebar-text">Playlists</span>{" "}
            <BiPlayCircle className="sidebar-icons" />
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/watch-later" className="sidebar-link">
            <span className="sidebar-text">Watch Later</span>{" "}
            <CgTimer className="sidebar-icons" />
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/liked-videos" className="sidebar-link">
            <span className="sidebar-text">Liked Videos</span>{" "}
            <BiLike className="sidebar-icons" />
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/history" className="sidebar-link">
            <span className="sidebar-text">History</span>{" "}
            <BiHistory className="sidebar-icons" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
