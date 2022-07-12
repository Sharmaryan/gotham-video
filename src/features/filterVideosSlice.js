import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {
    all: null,
    spiderman: null,
    blackPanther: null,
    drStrange: null,
    hulk: null,
  },
};

const filterVideosSlice = createSlice({
  name: "filterVideos",
  initialState,
  reducers: {
    all: (state) => {
      state.categories.all = true;
      state.categories.spiderman = false;
      state.categories.blackPanther = false;
      state.categories.drStrange = false;
      state.categories.hulk = false;
    },
    spiderman: (state) => {
      state.categories.all = false;
      state.categories.spiderman = true;
      state.categories.blackPanther = false;
      state.categories.drStrange = false;
      state.categories.hulk = false;
    },
    blackPanther: (state) => {
      state.categories.all = false;
      state.categories.spiderman = false;
      state.categories.blackPanther = true;
      state.categories.drStrange = false;
      state.categories.hulk = false;
    },
    drStrange: (state) => {
      state.categories.all = false;
      state.categories.spiderman = false;
      state.categories.blackPanther = false;
      state.categories.drStrange = true;
      state.categories.hulk = false;
    },
    hulk: (state) => {
      state.categories.all = false;
      state.categories.spiderman = false;
      state.categories.blackPanther = false;
      state.categories.drStrange = false;
      state.categories.hulk = true;
    },
  
  },
});

export const filterReducer = filterVideosSlice.reducer;
export const { all, spiderman, blackPanther, drStrange, hulk } =
  filterVideosSlice.actions;
