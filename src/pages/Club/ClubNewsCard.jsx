import PropTypes from "prop-types";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const ClubNewsCard = ({ news }) => {
  const { title, images, details, author } = news;
  return (
    <div>
      <div className="bg-[#F3F3F3] flex justify-between items-center p-4 rounded-t-lg">
        <div className="flex items-center gap-4">
          <img
            className="w-[50px] rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt={author.name}
          />
          <div>
            <h4>{author.name} </h4>
            <p>{author.published_date} </p>
          </div>
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

      <div className="card bg-base-100 shadow-xl space-y-1 mb-5 p-4">
        <h2 className="card-title">{title}</h2>
        <figure>
          <img className="w-full h-[400px]" src={images} alt="" />
        </figure>
        <div className="card-body">
          {details.length > 230 ? (
            <p>
              {details.slice(0, 230)}
              <Link className="text-blue-600 font-bold block">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details} </p>
          )}
        </div>
      </div>
    </div>
  );
};

ClubNewsCard.propTypes = {
  news: PropTypes.object,
};

export default ClubNewsCard;
