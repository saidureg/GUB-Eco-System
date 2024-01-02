import { FaGift, FaHeadset, FaQuestionCircle } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Payment = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handlePayment = (e) => {
    e.preventDefault();
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let length = 16;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    const bkashNumber = e.target.bkashNumber.value;
    const payment = {
      email: user?.email,
      Number: bkashNumber,
      price: totalPrice,
      date: new Date(), // convert to utc date. use moment js to
      transactionId: result,
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
    };

    Swal.fire({
      title: "Are you sure?",
      text: `You total bill is $${totalPrice}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, pay it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/payments", payment).then((res) => {
          console.log("payment saved", res.data);
          if (res.data?.paymentResult?.insertedId) {
            refetch();
            e.target.reset();
            toast.success("Payment Successful");
          }
        });
      }
    });
  };

  return (
    <div className="card w-96 mx-auto bg-base-200 shadow-xl mt-16">
      <div className="card-body p-0 text-center">
        <h2 className="text-5xl font-bold font-PtSerif my-4 text-center">
          GUB{" "}
        </h2>
        <div className="flex gap-2">
          <p className="flex flex-col items-center">
            <FaHeadset className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
            Support
          </p>
          <p className="flex flex-col items-center">
            <FaQuestionCircle className="text-4xl" /> FAQ
          </p>
          <p className="flex flex-col items-center">
            <FaGift className="text-4xl bg-black text-white p-2 rounded-full" />{" "}
            Offers
          </p>
        </div>
        <div className="flex items-center bg-red-500 mt-2">
          <p className="uppercase text-white text-center text-sm p-2">Cards</p>
          <p className="uppercase text-white text-center bg-violet-500 text-sm p-2">
            Mobile banking
          </p>
          <p className="uppercase text-white text-center text-sm p-2">
            Net banking
          </p>
        </div>
        <form onSubmit={handlePayment} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bkash Number</span>
            </label>
            <input
              type="number"
              name="bkashNumber"
              placeholder="Bkash Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            {cart.length ? (
              <button className="btn btn-primary w-full">
                Pay BDT{totalPrice}/-
              </button>
            ) : (
              <button className="btn cursor-not-allowed w-full" disabled>
                Pay BDT{totalPrice}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
