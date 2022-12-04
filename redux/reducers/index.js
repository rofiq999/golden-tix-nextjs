import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import profileReducer from "./profile";


export default combineReducers({
  auth: authReducer,
  user: profileReducer,
});
