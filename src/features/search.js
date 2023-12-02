import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: [],
  },
  reducers: {
    search: (state,action) => {
      return {
        ...state,
        value:action.payload,
      };
    },
  },
});

export default searchSlice.reducer;

export const { search } = searchSlice.actions;
