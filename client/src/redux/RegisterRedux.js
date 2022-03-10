import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: "",
    email: "",
    password: "",
    registered: false,
  },
  //api call
  reducers: {
    registered: (state, action) => {
      state.registered = true;
    },
    registeredFail: (state, action) => {
      state.registered = false;
    },
  },
});

export const { register, registerFail } = registerSlice.actions;
// export const selectUser = (state) => state.currentUser.loggedIn;
export default registerSlice.reducer;
te