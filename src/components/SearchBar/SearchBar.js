import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { videoSearch } from "features/filterVideosSlice";
import './SearchBar.css';
export const SearchBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const searchInputHandler = (e) => {
    dispatch(videoSearch(e.target.value));
  };
  return (
    <div className={`search ${theme}`}>
      <input
        type="text"
        placeholder="search videos"
        className={`search-bar ${theme}`}
        value={search}
        onChange={searchInputHandler}
      />
    </div>
  );
};
