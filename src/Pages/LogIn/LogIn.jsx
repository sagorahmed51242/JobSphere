import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const LogIn = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Log in the user with email and password
      await login(email, password);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Logged in successfully!",
      });

      navigate("/"); // Redirect after successful login
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      await loginWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Logged in successfully with Google!",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-center my-10 lg:my-28">
      <div className="lg:w-1/3">
        <div className="text-center space-y-2">
          <p className="text-sm text-[#3C65F5]">Welcome back!</p>
          <h1 className="text-4xl font-bold text-[#05264E]">Member Login</h1>
          <p className="text-sm text-[#6C757D]">Access to all features. No credit card required.</p>
        </div>
        <div className="text-center pt-7 pb-2">
          <div
            className="flex justify-center items-center border py-2 text-sm font-bold gap-1 mb-5 cursor-pointer"
            onClick={handleGoogleLogIn}
          >
            <span>
              <FcGoogle className="text-lg" />
            </span>
            <span>Sign in with Google</span>
          </div>
          <div className="flex justify-center items-center">
            <hr className="w-full flex-1" />
            <p className="flex-1 text-sm px-1">Or continue with</p>
            <hr className="w-full flex-1" />
          </div>
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col text-sm space-y-2 my-2">
              <label htmlFor="Email">Email address *</label>
              <input
                className="border py-2 px-4"
                type="email"
                name="email"
                placeholder="afiaislam@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col text-sm space-y-2 my-2">
              <label htmlFor="Password">Password *</label>
              <input
                className="border py-2 px-4"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex gap-2">
                <input
                  className="w-4"
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                />
                <p>Remember me</p>
              </div>
              <p className="text-sm text-[#6C757D]">Forgot Password</p>
            </div>
            <div className="text-center text-sm font-bold">
              <button
                className="bg-[#11256a] text-white block w-full py-3 my-5 rounded-sm"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              <p>
                Don't have an account?
                <Link className="text-[#3C65F5]" to="/sign-up">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
