import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideNav.css";

const SideNav = ({ reload }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news", {
      headers: {
        "content-type": "application/json",
        authorization:
          "beerar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJCaWxsYWgiLCJpYXQiOjE2NzMxMTQyMjB9.SsEPaowWm0UrbRMpG9GH5lkjLGWdwRlPF-2zHf48fVw",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [reload]);
  return (
    <div className="side-nav-container">
      <ul className="link-container">
        {data.map((d) => (
          <li className="link-list">
            <NavLink className="link" to={`/news/${d._id}`}>
              {d.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
