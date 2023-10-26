export let board = ["", "", "", "", "", "", "", "", ""];
export const resetData = {
  match: 0,
  won: 0,
  lost: 0,
  draw: 0,
};
export const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
