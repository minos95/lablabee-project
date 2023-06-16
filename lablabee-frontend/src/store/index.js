import { configureStore, createSlice } from "@reduxjs/toolkit";
import labSlice from "./labSlice";
export const actions = labSlice.actions;

const store = configureStore({
  reducer: labSlice.reducer,
});
export default store;
