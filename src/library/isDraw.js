export const isDraw = (grid) => {
  let has_empty = false;

  for (let index = 0; index < grid.length; index++) {
    const row = grid[index];
    if (row.findIndex(c => c === '') !== -1) {
      has_empty = true;
    }
  }

  return has_empty ? '' : 'draw';
};
