import React from "react";
import "./modal.css";

const Modal = ({ data, setOpen }) => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-body">
          <button className="modal-close" onClick={() => setOpen(false)}>
            X
          </button>
          <div>
            <div className="thumb-container">
              <img className="modal-thumb" src={data.thumbnail} alt="" />
            </div>
            <form className="modal-form">
              <input
                className="input input-title"
                type="text"
                placeholder={data.title}
              />
              <textarea
                className="input input-title"
                name="desc"
                id="descId"
                cols="30"
                rows="5"
              ></textarea>
              <input className="input sub-btn" type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
