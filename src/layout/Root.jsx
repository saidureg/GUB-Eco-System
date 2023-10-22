import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div className="font-poppins max-w-screen-xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
