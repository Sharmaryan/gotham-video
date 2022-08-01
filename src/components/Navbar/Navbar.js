import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { videoSearch } from "features/filterVideosSlice";
import { changeTheme } from "features/themeSlice";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { search } = useSelector((state) => state.filter);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    dispatch(videoSearch(e.target.value));
  };
  const lightModeHandler = () => {
    dispatch(changeTheme("light"));
  };

  const darkModeHandler = () => {
    dispatch(changeTheme("dark"));
  };

  return (
    <nav className={`nav-menu navbar ${theme}`}>
      <ul>
        <li className={`menu-items ${theme}`}>
          <Link
            to="/"
            className={`text-decorations text-white nav-logo ${theme}`}
          >
            Clipz
          </Link>
        </li>

        <li className={`menu-items ${theme}`}>
          <Link
            to="/"
            className={`text-decorations text-white nav-logo menu-home ${theme}`}
          >
            Home
          </Link>
        </li>

        <li className={`menu-items fas-icons ${theme}`}>
          <Link
            to="/explore"
            className={`text-decorations text-white menu-explore ${theme}`}
          >
            Explore
          </Link>
        </li>
      </ul>
      {pathname === "/explore" && (
        <div className={`search ${theme}`}>
          <input
            type="text"
            placeholder="search videos"
            className={`search-bar ${theme}`}
            value={search}
            onChange={searchInputHandler}
          />
        </div>
      )}
      <div className="menu">
        <ul>
          <li className={`menu-items ${theme}`}>
            {user ? (
              <Link
                to="/profile"
                className={`text-decorations text-white ${theme}`}
              >
                <FaUserCircle />
              </Link>
            ) : (
              <Link
                to="/login"
                className={`text-decorations text-white ${theme}`}
              >
                <BiLogIn />
              </Link>
            )}
          </li>
          <li className={`menu-items ${theme}`}>
            {theme === "dark" ? (
              <BsFillSunFill
                onClick={lightModeHandler}
              />
            ) : (
              <BsFillMoonFill
                onClick={darkModeHandler}
                className="light-icon"
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
