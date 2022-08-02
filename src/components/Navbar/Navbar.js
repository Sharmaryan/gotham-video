import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "features/themeSlice";
import { SearchBar, NavbarMobileSearch } from "components";

export const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const { theme } = useSelector((state) => state.theme);
  const [searchClicked, setSearchClicked] = useState(false);
  const dispatch = useDispatch();
  const lightModeHandler = () => {
    dispatch(changeTheme("light"));
  };

  const darkModeHandler = () => {
    dispatch(changeTheme("dark"));
  };

  const searchClickedHandler = () => {
    setSearchClicked(true);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <>
      {searchClicked ? (
        <NavbarMobileSearch setSearchClicked={setSearchClicked} />
      ) : (
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
          {pathname === "/explore" && <SearchBar />}

          <div className="menu">
            <ul>
              <li className={`menu-items ${theme}`}>
                {pathname === "/explore" && (
                  <BiSearchAlt2
                    className="search-icon"
                    onClick={searchClickedHandler}
                  />
                )}
              </li>

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
                  <BsFillSunFill onClick={lightModeHandler} />
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
      )}
    </>
  );
};

