import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./Navbar.css";
import { useTheme } from "../../context/theme-context/theme-context";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themeSwitch = () => {
    theme === "white" ? setTheme("black") : setTheme("white");
  };

  return (
    <nav className="nav-menu navbar" style={{ background: theme }}>
      <ul>
        <li className="menu-items">
          <Link to="/" className="text-decorations text-white nav-logo">
            Videooz
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
      <div className="search">
        <i className="fas fa-search search-background"></i>
        <input type="text" placeholder="search videos" className="search-bar" />
      </div>
      <div className="menu">
        <ul>
          <li className="menu-items">
            <Link to="/login" className="text-decorations text-white">
              login
            </Link>
          </li>

          <li className="menu-items fas-icons " onClick={themeSwitch}>
            {theme === "white" ? <MdDarkMode />: <MdLightMode /> }
          </li>
        </ul>
      </div>
    </nav>
  );
};
