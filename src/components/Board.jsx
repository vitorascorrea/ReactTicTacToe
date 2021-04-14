import React from 'react';
import { Row } from './Row';

export const Board = ({ grid, onClick, gameFinished }) => {
  return (
    <div className="grid-wrapper">
      {grid.map((row, r_index) => {
        return (
          <Row key={r_index} rowIndex={r_index} row={row} onClick={gameFinished ? () => {} : onClick} />
        )
      })}
    </div>
  )
};