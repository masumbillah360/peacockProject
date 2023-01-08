import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const style = {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <h1>Page Not Found</h1>
      <h2 style={{ textAlign: "center" }}>
        Your seassion expired! <br />
        Please back to home page
      </h2>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default ErrorPage;
