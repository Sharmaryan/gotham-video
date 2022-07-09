import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <nav className="nav-menu navbar">
      <ul>
        <li className="menu-items">
          <Link to="/" className="text-decorations text-white nav-logo">
            Clipz
          </Link>
        </li>

        <li className="menu-items">
          <Link to="/" className="text-decorations text-white">
            Home
          </Link>
        </li>

        <li className="menu-items fas-icons">
          <Link to="/explore" className="text-decorations text-white">
            Explore
          </Link>
        </li>
      </ul>
      {pathname === "/explore" && (
        <div className="search">
          <i className="fas fa-search search-background"></i>
          <input
            type="text"
            placeholder="search videos"
            className="search-bar"
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
                login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
