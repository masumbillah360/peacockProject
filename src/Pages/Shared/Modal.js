import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./modal.css";

const Modal = ({ data, setOpen }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const category = form.catId.value;
    const description = form.descId.value;
    const date = new Date();
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const updatedData = {
      title,
      category,
      thumbnail: data.thumbnail,
      description,
      postDate: formattedDate,
    };
    fetch(`http://localhost:5000/news/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization:
          "beerar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJCaWxsYWgiLCJpYXQiOjE2NzMxMTQyMjB9.SsEPaowWm0UrbRMpG9GH5lkjLGWdwRlPF-2zHf48fVw",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Updated Successfully");
        navigate(`/news/${data._id}`);
        setOpen(false);
      });
  };
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
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                id="title"
                className="input input-title"
                type="text"
                placeholder={data.title}
              />
              <input
                id="catId"
                className="input input-title"
                type="text"
                defaultValue={data.category}
                placeholder={data.category}
              />
              <textarea
                className="input input-title"
                name="desc"
                id="descId"
                cols="30"
                rows="5"
              ></textarea>
              <button className="input sub-btn" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
