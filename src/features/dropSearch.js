import { createSlice } from "@reduxjs/toolkit";

const dropSearchSlice  = createSlice({
  name: "dropSearch",
  initialState: {
    value: [],
  },
  reducers: {
    dropSearch: (state,action) => {
      return {
        ...state,
        value:action.payload,
      };
    },
  },
});

export default dropSearchSlice.reducer;

export const { dropSearch } = dropSearchSlice.actions;
