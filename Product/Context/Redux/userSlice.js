import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {
  user: null,
  isAuthLoading: false,

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;  // Set the user data in the state
      state.isAuthLoading = false;  // Set loading to false once user is set
    },
    setAuthLoading: (state, action) => {
      state.isAuthLoading = action.payload;  // Set the loading state
    },
  },
});

export const { setUser, setAuthLoading } = userSlice.actions;
export default userSlice.reducer;