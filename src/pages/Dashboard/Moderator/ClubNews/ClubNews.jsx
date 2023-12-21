import { useForm } from "react-hook-form";
import { FaNewspaper } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/shared/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ClubNews = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecured = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const clubNews = {
        title: data.title,
        details: data.details,
        author: {
          name: user.displayName,
          published_date: new Date().toLocaleDateString(),
        },
        images: res.data.data.display_url,
      };
      const clubRes = await axiosSecured.post("/club", clubNews);
      console.log(clubRes.data);
      if (clubRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${data.title} is added!`,
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
      <SectionTitle subHeading="What's new?" heading="Add News" />
      <div className="bg-white px-5 py-4 rounded w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">News title*</span>
            </label>
            <input
              type="text"
              placeholder="News title"
              {...register("title", { required: true, maxLength: 200 })}
              className="input input-bordered w-full "
            />
            {errors.title && (
              <span className="text-red-600">News title is required</span>
            )}
          </div>
          {/* Description */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">News Details*</span>
            </label>
            <textarea
              {...register("details", { required: true, maxLength: 500 })}
              className="textarea textarea-bordered h-24"
              placeholder="News Details"
            ></textarea>
            {errors.details && (
              <span className="text-red-600">News Details is required</span>
            )}
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs block my-6"
          />
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Add News <FaNewspaper />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubNews;
