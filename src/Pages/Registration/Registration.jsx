import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommonContext } from "../../Route/CommonRoute";
import { updateProfile } from "firebase/auth";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import register from "../../assets/register.png";

const Registration = () => {
  const { firebaseRegister, loader, setLoader, firebaseLogOut, user } = useContext(CommonContext);
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  if (loader) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 z-10 border-green-500 fixed top-[50%] left-[50%]"></div>
    );
  }

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const conformPassword = e.target.conformPassword.value;

    if (user) {
      return Swal.fire({
        title: "Error!",
        text: "You are Already Log in. For new Register Please Sign out.",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (password !== conformPassword) {
      return Swal.fire({
        title: "Error!",
        text: "Password Not match!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        title: "Error!",
        text: "Password must be up to 6 correcter!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      // return toast.error("Password must be a Uppercase & Lowercase!");
      return Swal.fire({
        title: "Error!",
        text: "Password must be a Uppercase & Lowercase!",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    firebaseRegister(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Successfully Registered!",
              showConfirmButton: false,
              timer: 1500,
            });
            firebaseLogOut();
            navigate("/login");

            e.target.reset;
          })
          .catch((error) => {
            setLoader(false);

            return Swal.fire({
              title: "Error!",
              text: error.message,
              icon: "error",
              confirmButtonText: "Back",
            });
          });
      })
      .catch((err) => {
        setLoader(false);
        return Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Back",
        });
      });
  };

  return (
    <div className="bg-green-50 p-3">
      <Helmet>
        <title>Homely Haven | Register</title>
      </Helmet>

      <div className="mt-10">
        <h1
          data-aos-duration="3000"
          data-aos="fade-down"
          className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500 z-20"
        >
          {" "}
          REGISTER{" "}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-5  mt-10">
        <div className="flex-1 animate__animated animate__bounceInLeft animate__slower">
          <img className="w-full lg:w-2/3 mx-auto" src={register} alt="" />
        </div>
        <div className=" flex-1  flex justify-center items-center p-3">
          <div className="flex flex-col items-center justify-center max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-green-500 bg-green-200 animate__animated animate__bounceInRight animate__slower">
            <form onSubmit={handleRegisterForm} className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
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
                    required
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Your Photo URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    required
                    placeholder="Enter Your Photo URL"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="text-sm">
                    Your Password
                  </label>
                  <input
                    type={hidden1 ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                    placeholder="@Abc123"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  <div onClick={() => setHidden1(!hidden1)} className="absolute top-9 right-5 text-xl cursor-pointer">
                    {hidden1 ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="password" className="text-sm">
                    Conform Password
                  </label>
                  <input
                    type={hidden2 ? "text" : "password"}
                    name="conformPassword"
                    id="conformPassword"
                    placeholder="@Abc123"
                    required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                  <div onClick={() => setHidden2(!hidden2)} className="absolute top-9 right-5 text-xl cursor-pointer">
                    {hidden2 ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 bg-green-500 text-white"
                  >
                    Sign up
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">
                  You have already an Account?
                  <Link
                    to="/login"
                    rel="noopener noreferrer"
                    className="hover:underline dark:text-violet-600 text-blue-500 underline ml-2 font-semibold"
                  >
                    Sign In
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
