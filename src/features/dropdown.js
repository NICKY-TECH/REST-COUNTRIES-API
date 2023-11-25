import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropdown",
  initialState: {
    value: false,
  },
  reducers: {
    display: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default dropDownSlice.reducer;

export const { display } = dropDownSlice.actions;
