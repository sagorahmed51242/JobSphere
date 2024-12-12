import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
    const { loginWithGoogle, register, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;

        // Password validation regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=<>?])[A-Za-z\d!@#$%^&*()_\-+=<>?]{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 6 characters long, include 1 uppercase, 1 lowercase letter, and 1 symbol.",
            });
            return;
        }

        if (password !== rePassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Passwords do not match!",
            });
            return;
        }

        try {
            // Register the user
            await register(email, password);
            // Update the user's profile
            await updateUserProfile(fullName, photoUrl);

            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Your account has been created successfully!",
            });

            navigate("/"); // Redirect after successful registration
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
                    <p className="text-sm text-[#3C65F5]">Register</p>
                    <h1 className="text-4xl font-bold text-[#05264E]">Start for free Today</h1>
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
                        <span>Sign up with Google</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <hr className="w-full flex-1" />
                        <p className="flex-1 text-sm px-1">Or continue with</p>
                        <hr className="w-full flex-1" />
                    </div>
                </div>
                <div>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col text-sm space-y-2 my-2">
                            <label htmlFor="Full Name">Full Name *</label>
                            <input
                                className="border py-2 px-4"
                                type="text"
                                name="name"
                                placeholder="Afia Islam"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm space-y-2 my-2">
                            <label htmlFor="Email">Email *</label>
                            <input
                                className="border py-2 px-4"
                                type="email"
                                name="email"
                                placeholder="afiaislam@gmail.com"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-sm space-y-2 my-2">
                            <label htmlFor="PhotoUrl">Photo Url *</label>
                            <input
                                className="border py-2 px-4"
                                type="text"
                                name="photoUrl"
                                placeholder="http://afiaislamphotourl.com"
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
                        <div className="flex flex-col text-sm space-y-2 my-2">
                            <label htmlFor="RePassword">Re-Password *</label>
                            <input
                                className="border py-2 px-4"
                                type="password"
                                name="rePassword"
                                placeholder="***********"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex gap-2">
                                <input
                                    className="w-4"
                                    type="checkbox"
                                    name="termsandconditions"
                                    id="termsandconditions"
                                    required
                                />
                                <p>Agree to our terms and policy</p>
                            </div>
                            <p className="text-sm text-[#6C757D]">Learn more</p>
                        </div>
                        <div className="text-center text-sm font-bold">
                            <input
                                className="bg-[#182d7a] text-white block w-full py-3 my-5 rounded-sm"
                                type="submit"
                                value="Submit & Register"
                            />
                        </div>
                        <div className="text-sm text-center">
                            <p>
                                Already have an account?
                                <Link className="text-[#3C65F5]" to="/log-in">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
