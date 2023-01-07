import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://peacock-server.vercel.app/jwt", {
      method: "POST",
      headers: {
        "contetnt-type": "application/json",
        authorization: `bearer ${localStorage.getItem("secrete-token")}`,
      },
      body: JSON.stringify({ userId: "Billah" }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("secrete-token", data.token);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading....</h1>
        <h1>Please Wait</h1>
      </div>
    );
  }
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
