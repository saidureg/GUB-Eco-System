import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BusCard = ({ bus }) => {
  const {
    _id,
    route_no,
    image,
    bus_number,
    pickup_time,
    pickup_point,
    destination_point,
  } = bus;
  return (
    <div className="card bg-base-100 shadow-xl">
      <h2 className="pt-4 pb-2 text-[#403F3F] text-lg font-bold text-center">
        Route-{route_no}
      </h2>
      <figure className="px-5 ">
        <img src={image} alt={name} className="rounded-xl w-full h-[175px]" />
      </figure>
      <div className="card-body p-4 items-center text-center">
        <p className="text-[#403F3F] font-semibold">Bus Number: {bus_number}</p>
        <p className="text-[#403F3F] font-semibold mb-2">
          Pickup Time: {pickup_time}{" "}
        </p>
        <p className="text-[#403F3F] font-semibold mb-2">
          {pickup_point} - {destination_point}
        </p>
        <div className="card-actions mt-2">
          <Link to={`/busLocation/${_id}`}>
            <button className="btn text-white bg-[#00FF00] hover:text-[#00FF00]">
              Schedule
            </button>
          </Link>
          <button className="btn btn-primary">LOcation</button>
        </div>
      </div>
    </div>
  );
};

BusCard.propTypes = {
  bus: PropTypes.object,
};

export default BusCard;
