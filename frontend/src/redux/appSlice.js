import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true, // default to false
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = appSlice.actions;
export default appSlice.reducer;
