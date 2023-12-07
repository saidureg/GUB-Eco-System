import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/shared/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecured = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category_name: data.category_name,
        price: parseInt(data.price),
        image_url: res.data.data.display_url,
      };
      const menuRes = await axiosSecured.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${data.name} is added to the menu!`,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle subHeading="What's new?" heading="Add an Items" />
      <div className="bg-white px-5 py-4 rounded w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name", { required: true, maxLength: 50 })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <span className="text-red-600">Recipe name is required</span>
            )}
          </div>
          {/* category */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category_name", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="breakFast">Break Fast</option>
              <option value="lunch">Lunch</option>
              <option value="snacks">Snacks</option>
              <option value="drinks">Drinks</option>
            </select>
            {errors.category_name && (
              <span className="text-red-600">Category is required</span>
            )}
          </div>
          <div className="flex gap-6 my-6">
            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true, maxLength: 20 })}
                className="input input-bordered w-full "
              />
              {errors.price && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs block my-6"
          />
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Add Items <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
