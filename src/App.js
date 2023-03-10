import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import LoadingPage from "./Pages/Shared/LoadingPage/LoadingPage";
import router from "./router/router";

function App() {
  const [token, setToken] = useState("");
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
        setToken(data.token);
        setLoading(false);
      });
  }, [token]);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
