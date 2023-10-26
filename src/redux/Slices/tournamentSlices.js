import { createSlice } from "@reduxjs/toolkit";
const localStorageItemName = "tournamentHistory";
const initialState = {
  tournamentHistory: localStorage.getItem(localStorageItemName) || [
    {
      id: 1,
      title: "Tournament 01",
      description: "",
      playerX : "",
      playerO : "",
      playedAgainstRobot: false,
      totalMatch: 0,
      playerXwon: 0,
      playerXlost: 0,
      playerXdraw: 0,
    },
  ],
};

export const tournamentSlice = createSlice({
  name: "tournamentSlice",
  initialState,
  reducers: {
    addNewTournamentData: (state, { payload }) => {
      const id =
        state.tournamentHistory.length === 0
          ? 1
          : state.tournamentHistory.at(-1).id + 1;
      const newdata = { ...payload, id };

      state.tournamentHistory.push(newdata);
      localStorage.setItem(localStorageItemName, state.tournamentHistory);
    },
    deleteTournamentData: (state, { payload }) => {
      state.tournamentHistory = state.tournamentHistory.filter(
        (th) => th.id !== payload
      );
      localStorage.setItem(localStorageItemName, state.tournamentHistory);
    },

    clearTournamentData: (state) => {
      state.tournamentHistory = [];
      localStorage.setItem(localStorageItemName, state.tournamentHistory);
    },
  },
});

export const {
  addNewTournamentData,
  deleteTournamentData,
  clearTournamentData,
} = tournamentSlice.actions;

export default tournamentSlice.reducer;
