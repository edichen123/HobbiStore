import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartRedux";
import userReducer from "./userRedux"

const store =  configureStore({
  reducer: {
    cart: shoppingCartReducer,
    user: userReducer,
  },
});

export default store