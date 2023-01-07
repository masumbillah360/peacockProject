import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/jwt", {
      method: "POST",
      headers: {
        "contetnt-type": "application/json",
        authorization: `bearer ${localStorage.getItem("secrete-token")}`,
      },
      body: JSON.stringify({ userId: "Billah" }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("secrete-token", data.token));
  }, []);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
