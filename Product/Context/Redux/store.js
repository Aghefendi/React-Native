import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'; // We will create this in the next step

export default configureStore({
  reducer: {
    user: userReducer, // Add the user slice reducer here
  },
});