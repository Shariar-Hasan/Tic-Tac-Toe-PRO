import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
};

export const siteSlice = createSlice({
  name: "siteSlice",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setLoading } = siteSlice.actions;

export default siteSlice.reducer;
