import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  error: null,
  isLoading: false,
  token: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (login, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", login);
      localStorage.setItem("token", data.encodedToken);
      return data;
    } catch (err) {
      return rejectWithValue("invalid login credentials");
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async (signUp, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", signUp);
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
      return data;
    } catch (err) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout:(state) => {
      state.user = null;
      state.token = '';
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.foundUser;
      state.isLoading = false;
      state.error = "";
      state.token = payload.encodedToken;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.token = null;
    },
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload.createdUser;
      state.isLoading = false;
      state.error = "";
      state.token = payload.encodedToken;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.token = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const {userLogout} = authSlice.actions;
