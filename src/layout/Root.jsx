import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="font-poppins max-w-screen-xl mx-auto">
        <Outlet />

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
