import { winPatterns } from "../assets/constants";

export const useFunction = () => {
  const checkWinner = (board) => {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (!board.includes("")) return "Draw";
    return null;
  };
//   const updateLeaderboard = (winner) => {
//     const updatedLeaderboard = {
//       ...leaderboard,
//       matches: leaderboard.matches + 1,
//     };
//     if (winner === "X") {
//       updatedLeaderboard.wins += 1;
//     } else if (winner === "O") {
//       updatedLeaderboard.losses += 1;
//     } else {
//       updatedLeaderboard.draws += 1;
//     }
//     // setLeaderboard(updatedLeaderboard);
//   };
//   const setBoard = () => {};
//   const restartGame = () => {};

  return {
    checkWinner,
  };
};
