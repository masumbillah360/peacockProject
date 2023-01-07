import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import "./newsDetails.css";

const NewsDetails = () => {
  const data = useLoaderData();
  const { _id, title, thumbnail, category, postDate } = data.data;
  const [open, setOpen] = useState(false);
  const closeModal = (event) => {
    if (event.target.id === "ModalDiv") {
      setOpen(false);
    }
  };
  const handleUpdate = (event) => {
    setOpen(true);
  };
  return (
    <div className="details-container">
      <div>
        <img src={thumbnail} alt="" />
        <div>
          <h4>{title}</h4>
          <h5>{category}</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit veritatis iure nisi maxime mollitia sit, perspiciatis
            vel provident delectus odio totam illo doloremque facilis id qui
            expedita eos necessitatibus accusantium.
          </p>
          <div>
            <p>{postDate}</p>
            <button onClick={() => handleUpdate(_id)}>Update</button>
          </div>
        </div>
      </div>
      {open && (
        <div id="ModalDiv" className="modal-div" onClick={(e) => closeModal(e)}>
          <Modal id={_id} setOpen={setOpen} />
        </div>
      )}
    </div>
  );
};

export default NewsDetails;
