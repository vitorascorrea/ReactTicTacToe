import React, { useLayoutEffect, useState } from 'react';
import { Board } from './components';
import { restartGrid, isGameFinished } from './library';
import './Game.css';

const Game = () => {
  const [grid, setGrid] = useState();
  const [current_player, setCurrentPlayer] = useState('X');
  const [message, setMessage] = useState();
  const [game_finished, setGameFinished] = useState(false);
  const [game_loaded, setGameLoaded] = useState(false);

  useLayoutEffect(() => {
    resetGame();
  }, []);

  const handleClick = (row_index, column_index) => {
    const cell = grid[row_index][column_index];
    if (cell) return;

    const grid_copy = [...grid];
    grid_copy[row_index][column_index] = current_player;
    const next_player = current_player === 'X' ? 'O' : 'X';

    setGrid(grid_copy);
    setCurrentPlayer(next_player);

    checkGameResult(next_player);
  };

  const checkGameResult = (next_player) => {
    const game_result = isGameFinished(grid);
    if (!game_result) return setMessage(`It's ${next_player} turn`);

    setGameFinished(true);

    if (game_result !== 'draw') {
      setMessage(`The winner is: ${game_result[0]}`);
    } else {
      setMessage(`The game is a draw`);
    }
  };

  const resetGame = () => {
    setGrid(restartGrid());
    setGameFinished(false);
    setCurrentPlayer('X');
    setMessage(`It's X turn`);
    setGameLoaded(true);
  };

  return (
    game_loaded && (
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
    )
  );
}

export default Game;
