import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Canteen from "../pages/Canteen/Canteen";
import BusPoint from "../pages/BusPoint/BusPoint";
import BusLocationTable from "../pages/BusPoint/BusLocationTable";
import Dashboard from "../layout/Dashboard";
import AddItems from "../pages/Dashboard/Moderator/AddItems/AddItems";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/canteen",
        element: <Canteen />,
      },
      {
        path: "/busPoint",
        element: <BusPoint />,
        loader: () => fetch("/bus.json"),
      },
      {
        path: "/busLocation/:id",
        element: <BusLocationTable />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addItems",
        element: <AddItems />,
      },
    ],
  },
]);

export default Router;
