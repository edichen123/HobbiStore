// import { configureStore } from "@reduxjs/toolkit";
// import shoppingCartReducer from "./shoppingCartRedux";
// import userReducer from "./userRedux";

// const store = configureStore({
//   reducer: {
//     cart: shoppingCartReducer,
//     user: userReducer,
//   },
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: shoppingCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
