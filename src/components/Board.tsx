import React, { useState } from "react";
import Square from "./Square";
import WinnerPopup from "./WinnerPopup";
import DrawPopup from "./DrawPopup";

/**
 * Board is component which contains grid of 9 cells [3 X 3]
 * It accepts 3 props as below :
 * isXTurn - It's true for 'X' and false for 'O'.
 * setIsXTurn - A callback function for changing player turn
 * playerWins - A callback function to set winner symbol [X or 0]
 */

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

  //Created string array for 9 elements and initialized it with null
  const [cellValues, setCellValues] = useState<string[]>(Array(9).fill(null));
  const [isDraw, setIsDraw] = useState(false);

  /**
   * There are total 8 combinations by which a player can win the game.
   * The first player who completes winning condition will win.
   * If a player wins then dialog box for winning displays and if match ends in draw then dialog box for draw is displayed.
   * @returns String
   */
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

  /**
   * A function which takes selected cell index and sets it to respective 'X' or '0'.
   * If array does not contain null value then it is draw.
   * @param index
   * @returns void
   */
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

  // A function to reset values
  const handleReset = (): void => {
    setCellValues(Array(9).fill(null));
    setIsXTurn(true);
    setIsDraw(false);
  };

  let isWinner: string = "";
  isWinner = checkWinner();

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
