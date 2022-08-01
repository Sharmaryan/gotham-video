import React from "react";
import "./MobileSidebar.css";
import { Link } from "react-router-dom";
import { BiLike, BiPlayCircle, BiHome, BiHistory } from "react-icons/bi";
import { CgTimer } from "react-icons/cg";
import { useSelector } from "react-redux";
import { MdOutlineExplore } from "react-icons/md";
export const MobileSidebar = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${theme} mobile-sidebar`}>
      <Link className="mobile-links" to="/">
        <BiHome className="mobile-icons" />
      </Link>
      <Link className="mobile-links" to="/explore">
        <MdOutlineExplore className="mobile-icons" />
      </Link>
      <Link className="mobile-links" to="/playlists">
        <BiPlayCircle className="mobile-icons" />
      </Link>
      <Link className="mobile-links" to="/watch-later">
        <CgTimer className="mobile-icons" />
      </Link>
      <Link className="mobile-links" to="/liked-videos">
        <BiLike className="mobile-icons" />
      </Link>
      <Link className="mobile-links" to="/history">
        <BiHistory className="mobile-icons" />
      </Link>
    </div>
  );
};
