import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.png";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return swal("Oops!", "Please Provide a valid email", "error");
    }
    e.currentTarget.reset();
    signIn(email, password)
      .then(() => {
        toast("You have successfully logged in");

        // navigate after login
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        return swal("Oops!", "Invalid email or password", "error");
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-1/2">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <img className="w-[250px] mx-auto mt-5" src={logo} alt="logo" />
          <h3 className="text-center text-4xl font-semibold text-[#403F3F] mt-16 mb-8">
            Login your account
          </h3>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Login</button>
            </div>
          </form>
          <p className="text-center mb-8 font-semibold text-[#706F6F]">
            Do not Have An Account ?
            <Link
              className="text-red-600 text-xl hover:underline hover:text-red-400"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
