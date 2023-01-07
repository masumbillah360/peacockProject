import React from "react";
import "./modal.css";

const Modal = ({ id, setOpen }) => {
  //   const modalRef = useRef();
  //   const handleClose = (event) => {
  //     if (modalRef.current.contains(event.target)) {
  //       setOpen(false);
  //     }
  //     console.log(modalRef.current.contains(event.target));
  //   };

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
