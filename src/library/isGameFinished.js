import { isArrayMatching } from "./isArrayMatching";
import { isDraw } from "./isDraw";

export const isGameFinished = (grid) => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  const columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  const diagonals = [
    [0, 4, 8],
    [2, 4, 6]
  ];

  const have_rows_finished = rows.map(i => isArrayMatching(i, grid)).find(r => r);
  const have_columns_finished = columns.map(i => isArrayMatching(i, grid)).find(r => r);
  const have_diagonals_finished = diagonals.map(i => isArrayMatching(i, grid)).find(r => r);

  return have_rows_finished || have_columns_finished || have_diagonals_finished || isDraw(grid);
};