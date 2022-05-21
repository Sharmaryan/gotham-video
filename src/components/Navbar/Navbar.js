import { useAuth } from "context";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "", auth: false });
    toast.warn("Successfully logged out!");
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
            {auth.user ? (
              <p className="text-decorations text-white" onClick={logout}>
                logout
              </p>
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
