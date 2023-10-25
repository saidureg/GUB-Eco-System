import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import gubCampus from "../../assets/gub_campus.png";
import gubBus from "../../assets/gub_bus.png";
import gubCanteen from "../../assets/gub_canteen.png";
import gubCareer from "../../assets/career.jpg";

const RightSideNavbar = () => {
  return (
    <div className="mt-12">
      {/* Find us on */}
      <div>
        <h3 className="text-2xl p-4">Find Us On</h3>
        <div className="px-4">
          <a
            className="flex items-center gap-2 border rounded-t-lg py-2 px-3"
            href="https://www.facebook.com/"
          >
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a
            className="flex items-center gap-2 border-x py-2 px-3"
            href="https://twitter.com/"
          >
            <FaTwitter></FaTwitter> Twitter
          </a>
          <a
            className="flex items-center gap-2 border rounded-b-lg py-2 px-3"
            href="https://www.instagram.com/?hl=en"
          >
            <FaInstagram></FaInstagram> Instagram
          </a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="mt-4 bg-[#F3F3F3] rounded p-4">
        <h3 className="text-2xl mb-2">Q-Zone</h3>
        <div className="space-y-24 pb-12">
          <div className="relative">
            <div className="border bg-base-100 w-[274px] h-[180px] rounded-md"></div>
            <div className="border bg-base-100 absolute top-0 -rotate-6 rounded-md w-[274px] h-[220px]">
              <img
                className="w-[245px] h-[150px] rounded-md rotate-6 mx-3 my-4"
                src={gubCampus}
                alt=""
              />
              <h3 className="rotate-6 text-center text-lg font-semibold text-[#403F3F]">
                GUB Campus
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="border bg-base-100 w-[274px] h-[180px] rounded-md"></div>
            <div className="border bg-base-100 absolute top-0 -rotate-6 rounded-md w-[274px] h-[220px]">
              <img
                className="w-[245px] h-[150px] rounded-md rotate-6 mx-3 my-4"
                src={gubCareer}
                alt=""
              />
              <h3 className="rotate-6 text-center text-lg font-semibold text-[#403F3F]">
                Career
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="border bg-base-100 w-[274px] h-[180px] rounded-md"></div>
            <div className="border bg-base-100 absolute top-0 -rotate-6 rounded-md w-[274px] h-[220px]">
              <img
                className="w-[245px] h-[150px] rounded-md rotate-6 mx-3 my-4"
                src={gubBus}
                alt=""
              />
              <h3 className="rotate-6 text-center text-lg font-semibold text-[#403F3F]">
                Bus Route
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="border bg-base-100 w-[274px] h-[180px] rounded-md"></div>
            <div className="border bg-base-100 absolute top-0 -rotate-6 rounded-md w-[274px] h-[220px]">
              <img
                className="w-[245px] h-[150px] rounded-md rotate-6 mx-3 my-4"
                src={gubCanteen}
                alt=""
              />
              <h3 className="rotate-6 text-center text-lg font-semibold text-[#403F3F]">
                Canteen
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="border bg-base-100 w-[274px] h-[180px] rounded-md"></div>
            <div className="border bg-base-100 absolute top-0 -rotate-6 rounded-md w-[274px] h-[220px]">
              <img
                className="w-[245px] h-[150px] rounded-md rotate-6 mx-3 my-4"
                src={gubBus}
                alt=""
              />
              <h3 className="rotate-6 text-center text-lg font-semibold text-[#403F3F]">
                Bus Schedule
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNavbar;
