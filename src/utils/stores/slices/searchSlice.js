import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, action) => {
      //   console.log(action.payload, "action");
      //   state = Object.assign(state, action.payload);

      return { ...state, ...action.payload };
    },
  },
});

export const { cacheSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
