import React, { useState } from 'react';
import { Board } from './components/Board';
import { restartGrid } from './library/restartGrid';
import './Game.css';

const Game = () => {
  const [grid, setGrid] = useState(restartGrid());
  const [current_player, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState('Its X turn');
  const [game_finished, setGameFinished] = useState(false);

  const handleClick = (row_index, column_index) => {
    const cell = grid[row_index][column_index];
    if (cell) return;

    const grid_copy = [...grid];
    grid_copy[row_index][column_index] = current_player;
    const next_player = current_player === 'X' ? 'O' : 'X';

    setGrid(grid_copy);
    setCurrentPlayer(next_player);

    checkGameResult(grid_copy);
  };

  const checkGameResult = () => {
    const game_result = isGameFinished();
    if (!game_result) return setMessage(`Its ${current_player} turn`);

    setGameFinished(true);

    if (game_result !== 'draw') {
      setMessage(`The winner is: ${game_result[0]}`);
    } else {
      setMessage(`The game is a draw`);
    }
  };

  const isGameFinished = () => {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonals = [[0, 4, 8], [2, 4, 6]];

    const have_rows_finished = rows.map(isArrayMatching).find(r => r);
    const have_columns_finished = columns.map(isArrayMatching).find(r => r);
    const have_diagonals_finished = diagonals.map(isArrayMatching).find(r => r);

    return have_rows_finished || have_columns_finished || have_diagonals_finished || isDraw(grid);
  };

  const isDraw = () => {
    let has_empty = false;

    for (let index = 0; index < grid.length; index++) {
      const row = grid[index];
      if (row.findIndex(c => c === '') !== -1) {
        has_empty = true;
      }
    }

    return has_empty ? '' : 'draw';
  };

  const isArrayMatching = (array) => {
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

  const resetGame = () => {
    setGrid(restartGrid());
    setGameFinished(false);
    setCurrentPlayer('X');
    setMessage('Its X turn');
  };

  return (
    <div className="wrapper">
      <h1>Tic tac toe!</h1>
      <Board grid={grid} onClick={handleClick} gameFinished={game_finished} />
      <div className="message">
        {message}
      </div>
      <button className="reset-button" onClick={resetGame}>
        {game_finished ? 'New game' : 'Reset game'}
      </button>
    </div>
  );
}

export default Game;
