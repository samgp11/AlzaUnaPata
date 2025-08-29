import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import shelterReducer from "./slices/shelterSlice"; 

export const store = configureStore({
  reducer: {
    app: appReducer,
    shelter: shelterReducer, 
  },
});

export default store;