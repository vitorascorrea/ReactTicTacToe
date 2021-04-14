import React from 'react';
import { Cell } from './Cell';

export const Row = ({ row, rowIndex, onClick }) => {
  return (
    <div key={rowIndex} className="row">
      {row.map((cell, c_index) => {
        return (
          <Cell key={c_index} cell={cell} rowIndex={rowIndex} columnIndex={c_index} onClick={onClick} />
        );
      })}
    </div>
  );
};