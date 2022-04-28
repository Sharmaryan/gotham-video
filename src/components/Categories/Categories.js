import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { useVideo } from "../../context/video-context/video-context";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { videoDispatch } = useVideo();

  useEffect(() => {
    (async () => {
      try {
        const getCategories = await axios.get("/api/categories");
        setCategories((prev) => getCategories.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2 className="text-sm text-center categories-heading">categories</h2>

      <div className="categories">
        {categories.map(({ image, altText, title, id, dispatch }) => {
          return (
            <div className="category" key={id}>
              <img src={image} className="category-image" alt={altText} />
              <p className="category-title">
                <Link
                  to="/explore"
                  className="text-decorations text-white title"
                  onClick={() => {
                    videoDispatch({ type: dispatch });
                  }}
                >
                  {title}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
