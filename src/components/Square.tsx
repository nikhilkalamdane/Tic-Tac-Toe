import React from "react";

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
