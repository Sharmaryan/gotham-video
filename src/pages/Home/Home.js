import React from "react";
import './Home.css';
import { ExploreVideos, Categories } from '../../components/index';
export const Home = () => {
  return <div className="home"> 
  <ExploreVideos/>
  <Categories/>
  </div>;
};
