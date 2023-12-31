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
import UserProfile from "../pages/Dashboard/User/UserProfile";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import Statistics from "../pages/Dashboard/Admin/Statistics";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Club from "../pages/Club/Club";
import Cart from "../pages/Dashboard/User/Cart";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import ClubNews from "../pages/Dashboard/Moderator/ClubNews/ClubNews";
import ShowBusLocation from "../pages/BusPoint/ShowBusLocation";
import PaymentHistoryAdmin from "../pages/Dashboard/Admin/PaymentHistoryAdmin";

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
      },
      {
        path: "/busLocation/:id",
        element: <BusLocationTable />,
      },
      {
        path: "/showMap",
        element: <ShowBusLocation />,
      },
      {
        path: "/club",
        element: <Club />,
        loader: () => fetch("https://gub-eco-system-server.vercel.app/club"),
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // for user
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      // for moderator
      {
        path: "addItems",
        element: (
          <ModeratorRoute>
            <AddItems />
          </ModeratorRoute>
        ),
      },
      {
        path: "addClubNews",
        element: (
          <ModeratorRoute>
            <ClubNews />
          </ModeratorRoute>
        ),
      },
      // for Admin
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "paymentHistoryAdmin",
        element: (
          <AdminRoute>
            <PaymentHistoryAdmin />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
