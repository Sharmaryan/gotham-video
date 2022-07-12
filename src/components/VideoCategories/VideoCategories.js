import React from "react";
import { useDispatch } from "react-redux";
import "./VideoCategories.css";
import {
  all,
  spiderman,
  blackPanther,
  drStrange,
  hulk,
} from "features/filterVideosSlice";
export const VideoCategories = () => {
  const videoDispatch = useDispatch();
  const cateogriesButton = [
    { id: "1", category: "all", dispatch: all },
    { id: "2", category: "spiderman", dispatch: spiderman },
    { id: "3", category: "black panther", dispatch: blackPanther },
    { id: "4", category: "dr strange", dispatch: drStrange },
    { id: "5", category: "hulk", dispatch: hulk },
  ];
  
  return (
    <div className="video-categories">
      {cateogriesButton.map(({ id, category, dispatch }) => {
        return (
          <div key={id}>
            <button
              className="btn video-button"
              onClick={() => {
                videoDispatch(dispatch());
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};
