import React, { useState } from "react";
import Square from "./Square";
import WinnerPopup from "./WinnerPopup";
import DrawPopup from "./DrawPopup";

interface BoardState {
  cellValues: string[];
  isDraw: boolean;
}

interface BoardProps {
  isXTurn: boolean;
  setIsXTurn: React.Dispatch<React.SetStateAction<boolean>>;
  playerWins: React.Dispatch<React.SetStateAction<any>>;
}

const Board: React.FC<BoardProps> = (props: any) => {
  const {
    isXTurn,
    setIsXTurn,
    playerWins,
  }: {
    isXTurn: boolean;
    setIsXTurn: (data: boolean) => boolean;
    playerWins: (data: string) => string;
  } = props;

  const [cellValues, setCellValues] = useState<string[]>(Array(9).fill(null));
  const [isDraw, setIsDraw] = useState(false);
  const checkWinner = (): string => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (
        cellValues[a] != null &&
        cellValues[a] === cellValues[b] &&
        cellValues[a] === cellValues[c]
      ) {
        playerWins(cellValues[a]);
        return cellValues[a];
      }
    }

    return "";
  };

  let isWinner: string = "";
  isWinner = checkWinner();

  const handleClick = (index: number) => {
    if (cellValues[index] != null) {
      return;
    }

    const copyCellValues: any = [...cellValues];
    copyCellValues[index] = isXTurn ? "x" : "0";
    setCellValues(copyCellValues);

    if (!copyCellValues.includes(null)) {
      setIsDraw(true);
    }

    setIsXTurn(!isXTurn);
  };

  const handleReset = (): void => {
    setCellValues(Array(9).fill(null));
    setIsXTurn(true);
    setIsDraw(false);
  };

  return (
    <div className="board-container">
      {cellValues.map((ele, index) => {
        return (
          <Square
            squareValue={cellValues[index]}
            onClick={() => handleClick(index)}
            index={index}
          />
        );
      })}
      {isWinner ? (
        <WinnerPopup wonTheGame={true} handleReset={handleReset} />
      ) : isDraw ? (
        <DrawPopup isDraw={isDraw} handleReset={handleReset} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Board;
