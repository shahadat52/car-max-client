import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cars from "../../Pages/Cars/Cars";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AddCar from "../../Pages/AddCar/AddCar";
import Blog from "../../Pages/Blog/Blog";
import PrivateRoute from "../../Routes/PrivetRoute/PrivetRoute";
import BookingModal from "../../Pages/BookingModal/BookingModal";
import DashboardLayout from "../../Layout/Dashboard/DashboardLayout";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import DashboardWlc from "../../Pages/DashboardWlc/DashboardWlc";
import AdminBanner from "../../Pages/AdminBanner/AdminBanner";

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
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      { path: "/blog", element: <Blog /> },
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      { path: '/dashboard', element: <AdminBanner /> },
      { path: "/dashboard/myOrders", element: <MyOrders /> },
      { path: "/dashboard/addCar", element: <AddCar /> },
      { path: "/dashboard/allUsers", element: <AllUsers></AllUsers> },
      { path: "/dashboard/allSellers", element: <AllSellers></AllSellers> },
      { path: "/dashboard/allBuyers", element: <AllBuyers></AllBuyers> },
      { path: "/dashboard/myProducts", element: <MyProducts></MyProducts> },
    ],
  },
]);
