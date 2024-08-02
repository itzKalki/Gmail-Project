import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Ensure the path is correct

const store = configureStore({
  reducer: {
    app: appSlice
  },
});

export default store;
