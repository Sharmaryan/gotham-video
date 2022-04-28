import React, { useEffect, useState } from "react";
import axios from "axios";

import { VideoCard } from "components/VideoCard/VideoCard";
import { useVideo } from "context/video-context/video-context";
import {selectCategory} from "utils/selectCategory";

import "./VideoCards.css";

export const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  const { categories } = useVideo();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setVideos((prev) => response.data.videos);
    })();
  }, []);

  const selectedCategory = selectCategory(videos, categories);

  return (
    <div className="videos">
      {selectedCategory.map((video) => {
        const { id } = video;

        return (
          <div key={id}>
            <VideoCard {...video} />
          </div>
        );
      })}
    </div>
  );
};
