import PropTypes from "prop-types";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, thumbnail_url, details } = news;
  return (
    <div className="card bg-base-100 shadow-xl space-y-1 my-5 p-4">
      <div className=" flex justify-between items-center p-4 rounded-t-lg">
        <div className="flex items-center gap-4">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span>
            <BsBookmark></BsBookmark>
          </span>
          <span>
            <BsShare />
          </span>
        </div>
      </div>

      <figure>
        <img
          className="w-full h-64 rounded-lg px-5"
          src={thumbnail_url}
          alt=""
        />
      </figure>
      <div className="card-body">
        {details.length > 230 ? (
          <p>
            {details.slice(0, 230)}
            <Link className="text-blue-600 font-bold block" to={`/news/${_id}`}>
              Read More...
            </Link>{" "}
          </p>
        ) : (
          <p>{details} </p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
