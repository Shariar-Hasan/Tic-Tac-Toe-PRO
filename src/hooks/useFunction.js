import { useDispatch, useSelector } from "react-redux";
import { winPatterns } from "../assets/constants";
import {
  changeCurrentPlayer,
  clearBoard,
  setGameRunningStatus,
  setMultiplayerStatus,
  setTournamentStatus,
  updateBoard,
} from "../redux/Slices/gameSlices";
import { useNavigate, useParams } from "react-router-dom";
import { errorNotify, successNotify } from "../assets/helperFunctions";
import { useState } from "react";

export const useFunction = () => {
  // const [winningText, setWinningText] = useState("");
  const { isGameRunning, currentPlayer, board } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  // const { mode } = useParams();
  // const navigate = useNavigate();

  const handleSetGameMode = () => {
    //   if (isGameRunning) {
    //     console.log("running a game");
    //     return;
    //   }
    //   switch (mode) {
    //     case "single": {
    //       dispatch(setMultiplayerStatus(false));
    //       break;
    //     }
    //     case "multiple": {
    //       dispatch(setMultiplayerStatus(true));
    //       break;
    //     }
    //     case "tournament": {
    //       dispatch(setTournamentStatus(true));
    //       break;
    //     }
    //     default: {
    //       errorNotify("Game Mode no Found");
    //       dispatch(setGameRunningStatus(false));
    //       navigate("/404");
    //     }
    //   }
  };
  const startGame = () => {
    // setWinningText("");
    dispatch(setGameRunningStatus(true));
    dispatch(clearBoard());
  };
  const checkWinner = (list) => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (list[a] && list[a] === list[b] && list[a] === list[c]) {
        return list[a];
      }
    }
    if (!list.includes("")) return "Draw";
    return null;
  };

  const handleGame = (index) => {
    console.log(isGameRunning);
    if (!isGameRunning) {
      return;
    }
    if (board[index] === "X" || board[index] === "O") {
      errorNotify("This field is already selected");
      return;
    }
    const temp = [...board];
    temp[index] = currentPlayer;
    dispatch(updateBoard(temp));
    // console.log({ temp });
    const winner = checkWinner(temp);
    // console.log([...temp], winningText,winner);
    if (winner) {
      // successNotify("Game finished");
      if (winner === "Draw") {
        // setWinningText("It's a Draw!!");
        successNotify("It's a Draw!!");
      } else {
        // setWinningText(`💥${winner} won the game!💥`);
        successNotify(`💥${winner} won the game!💥`);
      }
      dispatch(setGameRunningStatus(false));
    } else {
      dispatch(changeCurrentPlayer());
    }
  };

  return {
    checkWinner,
    startGame,
    handleGame,
    handleSetGameMode,
    // winningText,
    // setWinningText,
  };
};
