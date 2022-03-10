import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    username: [],
    email: [],
    password: [],
    registered: false,
    error: false,
  },
  //api call
  reducers: {
    registered: (state) => {
      state.registered = true;
    },
    registeredSucessful: (state, action) => {
      state.registered = true;
      state.username = action.payload;
      state.email = action.payload;
      state.password = action.payload;
    },
    registeredFail: (state) => {
      state.registered = false;
      state.error = true;
    },
  },
});

export const { registered, registeredFail, registeredSucessful } =
  registerSlice.actions;
export default registerSlice.reducer;
