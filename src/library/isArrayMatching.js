export const isArrayMatching = (array, grid) => {
  let values_array = '';

  for (let index = 0; index < array.length; index++) {
    const cell_id = array[index];
    const coordinates = mapCellIdToCoordinates(cell_id);
    const grid_value = grid[coordinates.row][coordinates.column];
    values_array += grid_value;
  }

  if (values_array === 'XXX') return 'XXX';
  if (values_array === 'OOO') return 'OOO';

  return '';
};

const mapCellIdToCoordinates = (cell_id) => {
  switch (cell_id) {
    case 0: return { row: 0, column: 0 };
    case 1: return { row: 0, column: 1 };
    case 2: return { row: 0, column: 2 };
    case 3: return { row: 1, column: 0 };
    case 4: return { row: 1, column: 1 };
    case 5: return { row: 1, column: 2 };
    case 6: return { row: 2, column: 0 };
    case 7: return { row: 2, column: 1 };
    case 8: return { row: 2, column: 2 };
    default:
      break;
  }
};