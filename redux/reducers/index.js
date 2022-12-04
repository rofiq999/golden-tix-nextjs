import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import moviesReducer from "./movies";
import profileReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  movie: moviesReducer,
  user: profileReducer,
});
