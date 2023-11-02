import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.png";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const studentId = form.studentId.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, studentId, gender, phone, email, password);
    if (studentId.length !== 9) {
      return swal("Oops!", "Invalid student Id!", "error");
    } else if (phone.length !== 10) {
      return swal("Oops!", "Invalid phone number!", "error");
    } else if (password.length < 6) {
      return swal(
        "Oops!",
        "Password should be at least 6 characters!",
        "error"
      );
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/.test(password)
    ) {
      return swal(
        "Oops!",
        "Password should be uppercase letter and special symbol!",
        "error"
      );
    }
    e.target.reset();
    createUser(email, password)
      .then((result) => {
        form.reset();
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            toast("Account created successfully");
            navigate("/");
          })
          .catch((error) => {
            return swal("Oops!", error.message, "error");
          });
      })
      .catch(() => {
        return swal("Oops!", "Something went wrong", "error");
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-1/2">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <img className="w-[250px] mx-auto mt-5" src={logo} alt="logo" />
          <h3 className="text-center text-4xl font-semibold text-[#403F3F] mt-16 mb-8">
            Register your account
          </h3>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Student ID</span>
              </label>
              <input
                type="number"
                name="studentId"
                placeholder="Enter your student Id"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex items-center gap-6">
              <label className="px-1 py-2">
                <span className="label-text font-bold">Gender : </span>
              </label>
              <label className="flex items-center gap-3 font-semibold px-1 pt-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio checked:bg-red-500"
                  required
                />
                <span className="label-text">Male</span>
              </label>
              <label className="flex items-center gap-3 font-semibold px-1 pt-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio checked:bg-blue-500"
                  required
                />
                <span className="label-text">Female</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Phone Number</span>
              </label>
              <div className="w-full flex gap-1">
                <span className="border rounded-l-lg bg-base-100 py-3 px-3">
                  +880
                </span>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  className=" border rounded-r-lg py-3 px-3 w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="terms mt-2 ">
                <input
                  className="mr-3"
                  type="checkbox"
                  name="terms"
                  required
                  id="terms"
                />
                Accept Term & Conditions
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
