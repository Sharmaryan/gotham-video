import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav-menu navbar">
      <ul>
        <li className="menu-items">
          <Link to="/" className="text-decorations text-white nav-logo">
            Videooz
          </Link>
        </li>

        <li className="menu-items">
          <Link to="/login" className="text-decorations text-white">
            Home
          </Link>
        </li>

        <li className="menu-items fas-icons">Explore</li>
      </ul>
      <div className="search">
        <i className="fas fa-search search-background"></i>
        <input
          type="text"
          placeholder="search videos"
          className="search-bar"
        />
      </div>
      <div className="menu">
        <ul>
          <li className="menu-items">
            <Link to="/login" className="text-decorations text-white">
              login
            </Link>
          </li>

          <li className="menu-items fas-icons">
            <MdDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};
