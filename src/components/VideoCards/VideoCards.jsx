import React, { useEffect, useState } from "react";
import axios from "axios";

import { VideoCard } from "components/VideoCard/VideoCard";
import { useVideo } from "context/video-context/video-context";
import { category, searchVideo } from "services";

import "./VideoCards.css";

export const VideoCards = () => {
  const [videos, setVideos] = useState([]);
  const { categories, search } = useVideo();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setVideos((prev) => response.data.videos);
    })();
  }, []);

  const selectedCategory = category(videos, categories);
  const searchedVideo = searchVideo(selectedCategory, search);

  return (
    <div className="videos">
      {searchedVideo.map((video) => {
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
