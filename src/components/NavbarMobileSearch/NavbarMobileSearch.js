import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { videoSearch } from "features/filterVideosSlice";
import {IoMdArrowRoundBack} from 'react-icons/io';
import "./NavbarMobileSearch.css";
export const NavbarMobileSearch = ({ setSearchClicked }) => {
  const { theme } = useSelector((state) => state.theme);
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    dispatch(videoSearch(e.target.value));
  };
  return (
    <div className={`mobile-search nav-menu navbar mobile-nav ${theme}`}>
      <IoMdArrowRoundBack onClick={() => setSearchClicked(false)} />
      <input
        type="text"
        placeholder="search videos"
        className={`mobile-search-bar ${theme}`}
        value={search}
        onChange={searchInputHandler}
      />
    </div>
  );
};
