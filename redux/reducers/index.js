import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cinemaReducer from "./cinema";
import moviesReducer from "./movies";
import profileReducer from "./profile";
import bookingReducer from "./booking";

export default combineReducers({
  auth: authReducer,
  movie: moviesReducer,
  user: profileReducer,
  cinema: cinemaReducer,
  booking: bookingReducer,
});
