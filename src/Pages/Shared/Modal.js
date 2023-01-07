import React from "react";
import "./modal.css";

const Modal = ({ id, setOpen }) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-body">
          <button onClick={() => setOpen(false)}>close modal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
