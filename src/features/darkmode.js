import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "mode",
  initialState: {
    value: false,
  },
  reducers: {
    darkMode: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default darkModeSlice.reducer;

export const { darkMode } = darkModeSlice.actions;
