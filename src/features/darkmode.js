import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "mode",
  initialState: {
    value: 'light',
  },
  reducers: {
    darkMode: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default darkModeSlice.reducer;

export const { darkMode } = darkModeSlice.actions;
