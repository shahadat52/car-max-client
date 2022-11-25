import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cars from "../../Pages/Cars/Cars";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/cars/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars?company=${params.id}`),
        element: <Cars></Cars>,
      },
      { path: "/nissancars", element: <Cars /> },
      { path: "/hondacars", element: <Cars /> },
      { index: true, element: <Home /> },
    ],
  },
]);
