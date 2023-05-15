import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

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