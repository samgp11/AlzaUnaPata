import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialized: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleInit: (state) => {
      state.initialized = !state.initialized;
    },
  },
});

export const { toggleInit } = appSlice.actions;
export default appSlice.reducer;