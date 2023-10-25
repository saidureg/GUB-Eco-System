import PropTypes from "prop-types";
import { useState } from "react";
const FoodCard = ({ food }) => {
  const { name, image_url, price } = food;
  const [count, setCount] = useState(0);
  return (
    <div className="card bg-base-100 shadow-xl">
      <h2 className="pt-4 pb-2 text-[#403F3F] text-lg font-bold text-center">
        {name}
      </h2>
      <figure className="px-5 ">
        <img
          src={image_url}
          alt={name}
          className="rounded-xl w-full h-[175px]"
        />
      </figure>
      <div className="card-body p-4 items-center text-center">
        <p className="text-[#403F3F] font-semibold">Price: {price}/- </p>
        <p className="text-[#403F3F] font-semibold mb-2">Select Quantity: </p>
        <p className="flex items-center gap-10 text-xl md:text-2xl font-bold">
          {count >= 0 && (
            <span
              className="text-white bg-[#00FF00] px-2 py-1 rounded cursor-pointer"
              onClick={() => setCount(count - 1)}
            >
              -
            </span>
          )}
          {count < 0 ? 0 : `${count}`}
          <span
            className="text-white bg-[#00FF00] px-2 py-1 rounded cursor-pointer"
            onClick={() => setCount(count + 1)}
          >
            +
          </span>
        </p>
        <div className="card-actions mt-2">
          <button className="btn text-white bg-[#00FF00] hover:text-[#00FF00]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
