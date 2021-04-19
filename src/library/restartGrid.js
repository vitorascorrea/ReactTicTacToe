export const restartGrid = (grid_size = 3) => {
  const grid = new Array(grid_size).fill(new Array(grid_size).fill(''));

  return grid;
};