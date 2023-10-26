import { configureStore } from "@reduxjs/toolkit";
import tournamentSlices from "./Slices/tournamentSlices";
import gameSlices from "./Slices/gameSlices";

export default configureStore({
  reducer: {
    tournament: tournamentSlices,
    game: gameSlices,
  },
});
