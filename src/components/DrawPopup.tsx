import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

/**
 * DrawPopup is a dialog box which displays after game ends in draw.
 * It accepts 2 props as below:
 * isDraw - boolean value which sets to true only if game is draw
 * handleReset - a callback function to reset values
 */

interface DrawPopupState {
  show: boolean;
}

interface DrawPopupProps {
  isDraw: boolean;
  handleReset: React.Dispatch<React.SetStateAction<void>>;
}

const DrawPopup: React.FC<DrawPopupProps> = ({ isDraw, handleReset }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(isDraw);

  // To close dialog box
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} centered>
      <Modal.Body className="message">Oh no, It's a draw</Modal.Body>
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

export default DrawPopup;
