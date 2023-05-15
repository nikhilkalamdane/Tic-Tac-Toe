import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

/**
 * PlayerDetails is a dialog box which takes both player names as input
 * getPlayerName - a callback function which sends name of both playes to its parent [MainGamePage.tsx]
 */

interface PlayerDetailsState {
  show: boolean;
  Player1: string;
  Player2: string;
}

interface PlayerDetailsProps {
  getPlayerName: () => string;
}

const PlayerDetails = (props: any) => {
  const navigate = useNavigate();

  const {
    getPlayerName,
  }: { getPlayerName: (p1: string, p2: string) => string } = props;

  const [show, setShow] = useState<boolean>(true);
  const [Player1, setPlayer1] = useState<string>("");
  const [Player2, setPlayer2] = useState<string>("");

  const handleNext = () => {
    getPlayerName(Player1, Player2);
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
          <h1>Enter Player Details </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body">
        <h3>Player 1 (X): </h3>
        <input
          maxLength={12}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPlayer1(e.target.value)
          }
        />

        <h3>Player 2 (0): </h3>
        <input
          maxLength={20}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPlayer2(e.target.value)
          }
        />
      </Modal.Body>
      <Modal.Footer>
        <button className="button" id="popup-button" onClick={handleClose}>
          Back
        </button>
        <button className="button" id="popup-button" onClick={handleNext}>
          Next
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlayerDetails;
