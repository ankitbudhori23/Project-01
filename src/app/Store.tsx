import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../redux";

export const store = configureStore({
  reducer: RootReducer,
});
