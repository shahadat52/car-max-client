import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";

const SignUp = () => {
  const { createUser, logInWithGoogle, updateImageAndName } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, image, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("User Create Success", "", "success");
        updateImageAndName(name, image)
          .then(() => {
            Swal.fire("Information Updated", "", "success");
            navigate("/login");
            form.reset();
            navigate("/");
          })
          .catch((error) => {
            Swal.fire("Opps", error.message, "error");
          });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire("Opps", error.message, "error");
      });
  };
  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Good job!", "User Login successful!", "success");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Opps", error.message, "error");
      });
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col max-w-md  sm:p-10 bg-cyan-300 p-4 rounded-2xl shadow-2xl text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Registration</h1>
          <p className="text-sm text-gray-500">Create a new account</p>
        </div>
        <form
          onSubmit={handleCreateUser}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name "
                className=" w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-cyan-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Image Url
              </label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Enter Your Photo Url"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-cyan-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email "
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-cyan-100 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className=" w-full px-3 py-2 border rounded-md border-gray-300 bg-cyan-100 focus:border-gray-900 text-gray-900"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-600 shadow-xl hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            title="Google Sign In"
            className="p-3 rounded-sm text-3xl"
          >
            <FaGoogle />
          </button>

          <button
            aria-label="Log in with GitHub"
            title="GitHub Sign In"
            className="p-3 rounded-sm text-3xl"
          >
            <FaGithub />
          </button>
        </div>
        <p className="px-6 text-sm text-center text-cyan-900">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Log In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
