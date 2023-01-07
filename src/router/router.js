import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import NewsDetails from "../Pages/Shared/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "news/:id",
    element: <NewsDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
  },
]);
export default router;
