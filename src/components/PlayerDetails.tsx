import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

interface PlayerDetailsState {
  show: boolean;
  Player1: string;
  Player2: string;
}

interface PlayerDetailsProps {
  getPlayerName: () => string;
}

const PlayerDetails = (props: any) => {
  const {
    getPlayerName,
  }: { getPlayerName: (p1: string, p2: string) => string } = props;

  const navigate = useNavigate();

  const [show, setShow] = useState<boolean>(true);
  const [Player1, setPlayer1] = useState<string>("");
  const [Player2, setPlayer2] = useState<string>("");

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Enter Player Details </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Player 1 (X): </h4>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer1(e.target.value)
            }
          />
        </div>

        <div>
          <h4>Player 2 (0): </h4>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPlayer2(e.target.value)
            }
            required
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="button" id="popup-button" onClick={handleClose}>
          Back
        </button>
        <button
          className="button"
          id="popup-button"
          onClick={() => {
            getPlayerName(Player1, Player2);
            setShow(false);
          }}
        >
          Next
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlayerDetails;
