import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/index";

const reducer = {
  ...appReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
