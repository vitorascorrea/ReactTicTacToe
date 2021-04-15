import React from 'react';

export const Cell = ({ onClick, cell, rowIndex, columnIndex }) => {
  return (
    <div className="cell cell-size" onClick={() => onClick(rowIndex, columnIndex)}>
      {!cell && <input className="cell-input" type="checkbox" onChange={() => onClick(rowIndex, columnIndex)}/>}
      {cell}
    </div>
  );
};