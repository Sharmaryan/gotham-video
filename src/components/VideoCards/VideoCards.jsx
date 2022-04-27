import React, { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "../VideoCard/VideoCard";
import "./VideoCards.css";
import { useVideo } from "../../context/video-context/video-context";

export const VideoCards = () => {
  const [videos, setVideos] = useState([]);

  const { categories } = useVideo();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setVideos((prev) => response.data.videos);
    })();
  }, []);

  const selectCategory = (videos, categories) => {
    const { spiderman, drStrange, blackPanther, hulk, all } = categories;

    if (spiderman) {
      const spidermanVideos = videos.filter(
        (video) => video.category === "spiderman"
      );
      return spidermanVideos;
    }
    if (drStrange) {
      const drStrangeVideos = videos.filter(
        (video) => video.category === "drStrange"
      );
      return drStrangeVideos;
    }
    if (blackPanther) {
      const blackPantherVideos = videos.filter(
        (video) => video.category === "blackPanther"
      );
      return blackPantherVideos;
    }
    if (hulk) {
      const hulkVideos = videos.filter((video) => video.category === "hulk");
      return hulkVideos;
    }
    if (all) {
      return videos;
    }
    return videos;
  };

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
