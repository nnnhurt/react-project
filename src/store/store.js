import { configureStore, createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    mainNews: [],
    services: [],
    user: null,
  },
  reducers: {
    setNews: (state, action) => {
      state.mainNews = action.payload;
    },
    setService: (state, action) => {
      state.services = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setNews, setService, setUser } = projectSlice.actions;

export const selectMainNews = (state) => state.project.mainNews;

export const selectServices = (state) => state.project.services;

export const selectUser = (state) => state.project.user;

export const store = configureStore({
  reducer: {
    project: projectSlice.reducer,
  },
});
