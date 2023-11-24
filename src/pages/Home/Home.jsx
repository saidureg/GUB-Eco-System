import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import NewsCard from "./NewsCard";
import RightSideNavbar from "./RightSideNavbar";
import LeftSideNavbar from "./LeftSideNavbar";

const Home = () => {
  const gubNews = useLoaderData();

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="col-span-1">
          <LeftSideNavbar />
        </div>
        <div className="col-span-2">
          <h3>Home</h3>
          {gubNews.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div className="col-span-1">
          <RightSideNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
