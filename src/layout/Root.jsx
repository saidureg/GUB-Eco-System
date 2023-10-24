import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="font-poppins max-w-screen-xl mx-auto">
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
