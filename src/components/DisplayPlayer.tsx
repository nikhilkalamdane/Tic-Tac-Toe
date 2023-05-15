import React from "react";

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
