import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  likedVideos: [],
  watchLaterVideos: [],
  historyVideos: [],
  playlists: [],
};

export const likeVideo = createAsyncThunk(
  "video/like",
  async ({ auth, singleVideoDetail }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const dislikeVideo = createAsyncThunk(
  "video/dislike",
  async ({ videoId, auth }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: { authorization: auth.token },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const watchLater = createAsyncThunk(
  "video/watchLater",
  async ({ auth, singleVideoDetail }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: auth.token },
        data: { video: singleVideoDetail },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const removeWatchLater = createAsyncThunk(
  "video/removeFromWatchLater",
  async ({ videoId, auth }, { rejectWithValue }) => {
    console.log(videoId);
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: { authorization: auth.token },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const addVideoToHistory = createAsyncThunk(
  "video/addVideoToHistory",
  async ({ auth, video }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/history",
        headers: { authorization: auth.token },
        data: { video },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const removeVideoFromHistory = createAsyncThunk(
  "video/removeVideoFromHistory",
  async ({ _id, auth }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/user/history/${_id}`, {
        headers: { authorization: auth.token },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const clearAllVideosFromHistory = createAsyncThunk(
  "video/clearAllVideosFromHistory",
  async (auth, { rejectWithValue }) => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: auth.token },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const createPlaylists = createAsyncThunk(
  "video/createPlaylists",
  async ({ auth, playListTitle }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/playlists",
        headers: { authorization: auth.token },
        data: { playlist: { title: playListTitle } },
      });
      return response.data.playlists;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const addVideosToPlaylists = createAsyncThunk(
  "video/addVideosToPlaylists",
  async ({ _id, singleVideoDetail, auth }, { rejectWithValue }) => {
    try {
      const playlistId = _id;
      const { data } = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: singleVideoDetail },
        {
          headers: { authorization: auth.token },
        }
      );

      return data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const removeVideosFromPlaylists = createAsyncThunk(
  "video/removeVideosPlaylists",
  async ({ playlistId, singleVideoId, auth }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/api/user/playlists/${playlistId}/${singleVideoId}`,
        {
          headers: { authorization: auth.token },
        }
      );
      console.log()
      return data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const getPlaylists = createAsyncThunk(
  "video/getSinglePlaylist",
  async ({ auth }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: auth.token },
      });
      // console.log(response.data)
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);


export const clearAllVideosFromSinglePlaylist = createAsyncThunk(
  "video/clearAllVideosFromSinglePlaylist",
  async ({ playlistId, auth }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: auth.token },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("something went wrong");
    }
  }
);

const videosSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: {
    [likeVideo.fulfilled]: (state, action) => {
      state.likedVideos = action.payload.likes;
    },
    [dislikeVideo.fulfilled]: (state, action) => {
      state.likedVideos = action.payload.likes;
    },
    [watchLater.fulfilled]: (state, action) => {
      state.watchLaterVideos = action.payload.watchlater;
    },
    [removeWatchLater.fulfilled]: (state, action) => {
      state.watchLaterVideos = action.payload.watchlater;
    },
    [addVideoToHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload.history;
    },
    [removeVideoFromHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload.history;
    },
    [clearAllVideosFromHistory.fulfilled]: (state, action) => {
      state.historyVideos = action.payload.history;
    },
    [createPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload;
    },

    [addVideosToPlaylists.fulfilled]: (state, action) => {
      state.playlists = state.playlists.map((item) =>
        item._id === action.payload.playlist._id
          ? action.payload.playlist
          : item
      );
    },
    [removeVideosFromPlaylists.fulfilled]: (state, action) => {
      state.playlists = state.playlists.map((item) =>
        item._id === action.payload.playlist._id
          ? action.payload.playlist
          : item
      );
    },
    [getPlaylists.fulfilled]: (state, action) => {
      state.playlists = action.payload.playlists;
    },
 
    [clearAllVideosFromSinglePlaylist.fulfilled]: (state, action) => {
      state.playlists = action.payload.playlists;
    },
  },
});

export const videosReducer = videosSlice.reducer;






