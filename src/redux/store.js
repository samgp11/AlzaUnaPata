import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import shelterReducer from "./slices/shelterSlice"; // 🔹 importamos slice refugio

export const store = configureStore({
  reducer: {
    app: appReducer,
    shelter: shelterReducer, // 🔹 agregamos al store
  },
});

export default store;