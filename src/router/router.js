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
    loader: ({ params }) =>
      fetch(`http://localhost:5000/news/${params.id}`, {
        headers: {
          "content-type": "application/json",
          authorization:
            "beerar eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJCaWxsYWgiLCJpYXQiOjE2NzMxMTQyMjB9.SsEPaowWm0UrbRMpG9GH5lkjLGWdwRlPF-2zHf48fVw",
        },
      }),
  },
]);
export default router;
