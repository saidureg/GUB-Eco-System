import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
// import logo from "../../../assets/Logo.png";
import MenuItem from "./MenuItem";
import ModeratorMenu from "./Menu/ModeratorMenu";
import useAdmin from "../../../hooks/useAdmin";
import useModerator from "../../../hooks/useModerator";
import UserMenu from "./Menu/UserMenu";
import AdminMenu from "./Menu/AdminMenu";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Mobile Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <h3 className="text-2xl font-medium text-green-500">GUB Canteen</h3>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-200 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <h3 className="text-2xl font-medium text-green-500">
                {/* dashboard */}
                {!isAdmin
                  ? !isModerator
                    ? "User Dashboard"
                    : " Moderator Dashboard"
                  : " Admin Dashboard"}
              </h3>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              {!isAdmin ? (
                !isModerator ? (
                  <UserMenu />
                ) : (
                  <ModeratorMenu />
                )
              ) : (
                <AdminMenu />
              )}
              {/* <ModeratorMenu /> */}
            </nav>
          </div>
        </div>

        <div>
          <hr className="border-[#E76F51]" />

          <MenuItem icon={FaHome} label="Home" address="/" />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
