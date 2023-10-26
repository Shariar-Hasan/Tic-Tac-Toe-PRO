import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGameRunning: false,
  isTournament: false,
  isMultiplayer: false,
  isAgainstRobot: true,
  leaderBoard: {
    totalMatch: 0,
    playerXwon: 0,
    playerXlost: 0,
    playerXdraw: 0,
  },
};

export const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    // for tournament
    setTournamentStatus: (state, { payload }) => {
      state.isTournament = payload;
    },
    incPlayerXwon: (state) => {
      state.leaderBoard.playerXwon = state.leaderBoard.playerXwon + 1;
      state.leaderBoard.totalMatch = state.leaderBoard.totalMatch + 1;
    },
    incPlayerXlost: (state) => {
      state.leaderBoard.playerXlost = state.leaderBoard.playerXlost + 1;
      state.leaderBoard.totalMatch = state.leaderBoard.totalMatch + 1;
    },
    incPlayerXdraw: (state) => {
      state.leaderBoard.playerXdraw = state.leaderBoard.playerXdraw + 1;
      state.leaderBoard.totalMatch = state.leaderBoard.totalMatch + 1;
    },
    // for game
    setGameRunningStatus: (state, { payload }) => {
      state.isGameRunning = payload;
    },
    // for multiplayer
    setMultiplayerStatus: (state, { payload }) => {
      state.isMultiplayer = payload;
    },
    // for robot
    setRobotStatus: (state, { payload }) => {
      state.isAgainstRobot = payload;
    },
  },
});

export const {
  setGameRunningStatus,
  setMultiplayerStatus,
  setRobotStatus,
  setTournamentStatus,
  incPlayerXdraw,
  incPlayerXlost,
  incPlayerXwon,
} = gameSlice.actions;

export default gameSlice.reducer;
