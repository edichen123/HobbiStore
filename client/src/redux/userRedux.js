import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  //api call
  reducers: {
    login: (state) => {
      state.isFetching = true;
    },
    loginSuccessful: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { login, loginSuccessful, loginFail } = userSlice.actions;
export default userSlice.reducer;
