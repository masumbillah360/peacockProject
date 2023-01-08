import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import NewsDetails from "../Pages/Shared/NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "news/:id",
    element: <NewsDetails />,
    errorElement: <ErrorPage />,
    loader: ({ params }) =>
      fetch(`https://peacock-server.vercel.app/news/${params.id}`, {
        headers: {
          "content-type": "application/json",
          authorization: `beerar ${localStorage.getItem("secrete-token")}`,
        },
      }),
  },
]);
export default router;
