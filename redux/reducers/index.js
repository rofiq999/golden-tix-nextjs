import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import moviesReducer from "./movies";

export default combineReducers({
  auth: authReducer,
  movie: moviesReducer,
});
