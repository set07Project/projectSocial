import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
};

const GlobalFile = createSlice({
  name: "state",
  initialState,
  reducers: {
    userState: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    toggleState: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { userState, logOut, toggleState } = GlobalFile.actions;

export default GlobalFile.reducer;
