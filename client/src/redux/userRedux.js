// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: null,
//     isFetching: false,
//     error: false,
//   },
//   //api call
//   reducers: {
//     login: (state) => {
//       state.isFetching = true;
//     },
//     loginSuccessful: (state, action) => {
//       state.isFetching = false;
//       state.currentUser = action.payload;
//     },
//     loginFail: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });

// export const { login, loginSuccessful, loginFail } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    // loggedIn: false,
  },
  //api call
  reducers: {
    login: (state, action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
      // state.loggedIn = false;
    },
    loginSuccessful: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state, action) => {
      state.currentUser = null;
      state.loggedIn = action.payload.loggedIn;
    },
  },
});

export const { login, loginSuccessful, loginFail, logout } = userSlice.actions;
// export const selectUser = (state) => state.currentUser.loggedIn;
export default userSlice.reducer;
