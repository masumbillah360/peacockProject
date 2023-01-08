import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./sideNav.css";

const SideNav = ({ reload }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://peacock-server.vercel.app/news", {
      headers: {
        "content-type": "application/json",
        authorization: `beerar ${localStorage.getItem("secrete-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [reload, setLoading]);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="side-nav-container">
      <ul className="link-container">
        {data.map((d) => (
          <li key={d._id} className="link-list">
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
