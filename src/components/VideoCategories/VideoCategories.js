import React from "react";
import { useVideo } from "../../context/video-context/video-context";
import "./VideoCategories.css";

export const VideoCategories = () => {
  const { videoDispatch } = useVideo();

  const cateogriesButton = [
    { id: "1", category: "all", dispatch: "ALL" },
    { id: "2", category: "spiderman", dispatch: "SPIDER-MAN" },
    { id: "3", category: "black panther", dispatch: "BLACK-PANTHER" },
    { id: "4", category: "dr strange", dispatch: "DR-STRANGE" },
    { id: "5", category: "hulk", dispatch: "HULK" },
  ];

  return (
    <div className="video-categories">
      {cateogriesButton.map(({ id, category, dispatch }) => {
        return (
          <div key={id}>
            <button
              className="btn video-button"
              onClick={() => {
                videoDispatch({ type: dispatch });
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
