import React from "react";

/**
 * DisplayPlayer shows name of both player while playing game
 * isXTurn - It's true for 'X' and false for 'O'. Text "Your Turn" will blink for that player which is going to play.
 * playerName - respective player name
 */

interface DisplayPlayerProps {
  isXTurn: boolean;
  playerName: string;
}

const DisplayPlayer: React.FC<DisplayPlayerProps> = ({
  isXTurn,
  playerName,
}) => {
  return (
    <div>
      <h5 className="text-effect">{playerName}</h5>
      {isXTurn ? <h3 className="blink">Your turn</h3> : ""}
    </div>
  );
};

export default DisplayPlayer;
