import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context/theme-context";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      image: "https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg",
      altText: "spiderman",

      title: "Spiderman",
    },
    {
      id: 2,
      image:
        "https://static.toiimg.com/thumb/msid-82379825,width-1200,height-900,resizemode-4/.jpg",
      altText: "black panther",

      title: "black panther",
    },
    {
      id: 3,
      image:
        "https://www.cnet.com/a/img/resize/41e73c5ac49a7b175534bcd57d6b46c4776472dc/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg?auto=webp",
      altText: "dr strange",

      title: "dr strange",
    },
    {
      id: 4,
      image: "https://i.cdn.newsbytesapp.com/images/l80120220322094701.png",
      altText: "hulk",

      title: "hulk",
    },
  ];

  const { theme } = useTheme();

  return (
    <div style={{ background: theme }}>
      <h2 className="text-sm text-center categories-heading">categories</h2>

      <div className="categories">
        {categories.map(({ image, altText, title, id }) => {
          return (
            <div className="category" key={id}>
              <img src={image} className="category-image" alt={altText} />
              <p className="category-title">
                <Link
                  to="/explore"
                  className="text-decorations text-white title"
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
