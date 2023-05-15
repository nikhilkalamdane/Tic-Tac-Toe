import React from "react";

/**
 * Element square is created for each cell in 3 X 3 grid.
 * It accept 3 props as below:
 * squareValue - X or 0
 * index - index of each cell [from 0 to 8]
 * onClick - callback function which detects which cell is clicked
 */

interface SquareProps {
  squareValue: string;
  index: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Square: React.FC<SquareProps> = ({ squareValue, index, onClick }) => {
  return (
    <div className="square" id={`square_${index}`} onClick={onClick}>
      <h5 className="square-text">{squareValue}</h5>
    </div>
  );
};

export default Square;
