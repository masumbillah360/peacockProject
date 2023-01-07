import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import SideNav from "../Sidebar/SideNav";
import "./newsDetails.css";

const NewsDetails = () => {
  const data = useLoaderData();
  const [reload, setReload] = useState(false);
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
    <div className="container">
      <SideNav reload={reload} />
      <div className="details-container">
        <div className="details">
          <img className="details-thumb" src={thumbnail} alt="" />
          <div className="description-details">
            <h1 className="title">{title}</h1>
            <h5>Category : {category}</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit veritatis iure nisi maxime mollitia sit,
              perspiciatis vel provident delectus odio totam illo doloremque
              facilis id qui expedita eos necessitatibus accusantium.
            </p>
            <div>
              <p>Post Date : {postDate}</p>
              <button className="btn" onClick={() => handleUpdate(_id)}>
                Update
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div
            id="ModalDiv"
            className="modal-div"
            onClick={(e) => closeModal(e)}
          >
            <Modal
              data={data.data}
              setOpen={setOpen}
              reload={reload}
              setReload={setReload}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
