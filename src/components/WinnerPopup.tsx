import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import Modal from "react-bootstrap/Modal";

/**
 * WinnerPopup is a dialog box which displays after a player wins the game.
 * It accepts 2 props as below:
 * wonTheGame - boolean value which sets to true only if any player won the game
 * handleReset - a callback function to reset values
 */

interface WinnerPopupState {
  show: boolean;
}

interface WinnerPopupProps {
  wonTheGame: boolean;
  handleReset: React.Dispatch<React.SetStateAction<void>>;
}

const WinnerPopup: React.FC<WinnerPopupProps> = ({
  wonTheGame,
  handleReset,
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(wonTheGame);
  const winningPlayerName = useContext(Context);

  // To close dialog box
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} centered>
      <Modal.Body className="message">
        Congratulations {winningPlayerName}, <br />
        You won the game !!!
      </Modal.Body>
      <Modal.Footer>
        <button className="button" id="popup-button" onClick={handleClose}>
          Close
        </button>
        <button
          className="button"
          id="popup-button"
          onClick={() => handleReset()}
        >
          Play again
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default WinnerPopup;
