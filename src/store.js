import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "features/authSlice";
import { videosReducer } from "features/videosSlice";
import {filterReducer} from 'features/filterVideosSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    filter: filterReducer
  }
});