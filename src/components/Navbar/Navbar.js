import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import {BiLogIn} from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { videoSearch } from "features/filterVideosSlice";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    dispatch(videoSearch(e.target.value));
  };

  return (
    <nav className="nav-menu navbar">
      <ul>
        <li className="menu-items">
          <Link to="/" className="text-decorations text-white nav-logo">
            Clipz
          </Link>
        </li>

        <li className="menu-items">
          <Link to="/" className="text-decorations text-white menu-home">
            Home
          </Link>
        </li>

        <li className="menu-items fas-icons">
          <Link to="/explore" className="text-decorations text-white menu-explore">
            Explore
          </Link>
        </li>
      </ul>
      {pathname === "/explore" && (
        <div className="search">
          <input
            type="text"
            placeholder="search videos"
            className="search-bar"
            value={search}
            onChange={searchInputHandler}
          />
        </div>
      )}
      <div className="menu">
        <ul>
          <li className="menu-items">
            {user ? (
              <Link to="/profile" className="text-decorations text-white">
                <FaUserCircle />
              </Link>
            ) : (
              <Link to="/login" className="text-decorations text-white">
                <BiLogIn/>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
