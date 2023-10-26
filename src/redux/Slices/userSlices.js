import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    user1: "player ",
  },
};

export const userSlices = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
