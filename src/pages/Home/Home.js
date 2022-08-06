import React from "react";
import "./Home.css";
import { ExploreVideos, Categories, Social, MobileSidebar } from "../../components/index";
import { useSelector } from "react-redux";
import { useTitle } from "hooks/useTitle";

export const Home = () => {
  const {theme} = useSelector((state) => state.theme);
  useTitle("Home | Clipz");
  return (
      <div className={`home ${theme}`}>
      <ExploreVideos />
      <Categories />
      <Social />
      <MobileSidebar/>
    </div>
  );
};
