import React, { useEffect, useState } from "react";
import axios from "axios";
import { VideoCard } from "components/VideoCard/VideoCard";
import { category } from "services";
import { useSelector } from "react-redux";
import "./VideoCards.css";


export const VideoCards = () => {
  const [videos, setVideos] = useState([]);
  const { categories } = useSelector((state) => state.filter);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setVideos((prev) => response.data.videos);
    })();
  }, []);

  const selectedCategory = category(videos, categories);

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
