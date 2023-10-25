import sideDefaultPic from "../../assets/news.png";
import { PiShoppingBagOpen } from "react-icons/pi";

const LeftSideNavbar = () => {
  return (
    <div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#403F3F]">Latest News</h3>
        <div className="my-4">
          <img src={sideDefaultPic} alt="" />
          <h3 className="my-4">News-1</h3>
          <div className="flex items-center gap-6 border-b border-[#00FF00] pb-4">
            <h4>Club</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen /> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic} alt="" />
          <h3 className="my-4">News-1</h3>
          <div className="flex items-center gap-6 border-b border-[#00FF00] pb-4">
            <h4>Sports</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic} alt="" />
          <h3 className="my-4">News-1</h3>
          <div className="flex items-center gap-6 border-b border-[#00FF00] pb-4">
            <h4>Canteen</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic} alt="" />
          <h3 className="my-4">News-1</h3>
          <div className="flex items-center gap-6 border-b border-[#00FF00] pb-4">
            <h4>GUCCI</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
        <div className="my-4">
          <img src={sideDefaultPic} alt="" />
          <h3 className="my-4">News-1</h3>
          <div className="flex items-center gap-6 border-b border-[#00FF00] pb-4">
            <h4>Bus</h4>
            <p className="flex items-center gap-2">
              <PiShoppingBagOpen></PiShoppingBagOpen> Jan 4, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNavbar;
