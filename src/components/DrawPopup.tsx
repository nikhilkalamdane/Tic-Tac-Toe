import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

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
