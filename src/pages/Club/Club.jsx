import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import LeftSideNavbar from "../Home/LeftSideNavbar";
import RightSideNavbar from "../Home/RightSideNavbar";
import ClubNewsCard from "./ClubNewsCard";

const Club = () => {
  const clubNews = useLoaderData();
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-12">
        <div className="col-span-1">
          <LeftSideNavbar />
        </div>
        <div className="col-span-2 mt-6">
          {clubNews.map((news, idx) => (
            <ClubNewsCard key={idx} news={news}></ClubNewsCard>
          ))}
        </div>
        <div className="col-span-1">
          <RightSideNavbar />
        </div>
      </div>
    </div>
  );
};

export default Club;
