import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  spiderman,
  hulk,
  drStrange,
  blackPanther,
} from "features/filterVideosSlice";


export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const {theme} = useSelector((state) => state.theme);
  const videoDispatch = useDispatch();

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

  const categoryHandler = (dispatch) => {
    if (dispatch === "SPIDER-MAN") videoDispatch(spiderman());
    if (dispatch === "BLACK-PANTHER") videoDispatch(blackPanther());
    if (dispatch === "DR-STRANGE") videoDispatch(drStrange());
    if (dispatch === "HULK") videoDispatch(hulk());
  };

  return (
    <div>
      <h2 className={`text-sm text-center categories-heading ${theme}`}>categories</h2>

      <div className={`categories ${theme}`}>
        {categories.map(({ image, altText, title, id, dispatch }) => {
          return (
            <div className={`category ${theme}`} key={id}>
              <Link
                to="/explore"
                className="text-decorations text-white title"
                onClick={() => {
                  categoryHandler(dispatch);
                }}
              >
                <img src={image} className="category-image" alt={altText} />
                <p className="category-title">{title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
