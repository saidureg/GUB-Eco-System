import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const FoodCard = ({ food }) => {
  const { _id, name, image_url, price } = food;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState(0);
  const handleAddToCart = () => {
    if (user && user.email) {
      // add to cart
      const cartItem = {
        menuId: _id,
        name,
        image_url,
        price,
        quantity: count,
        email: user.email,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Success!",
            text: `${name} added to cart`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to updated the cart items count
          refetch();
        }
      });
    } else {
      // redirect to login
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={handleAddToCart}
            className="btn text-white bg-[#00FF00] hover:text-[#00FF00]"
          >
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
