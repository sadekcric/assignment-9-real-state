import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommonContext } from "../Route/CommonRoute";
import Swal from "sweetalert2";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Footer = () => {
  const { user, firebaseLogOut, loader, githubLogin, googleLogin, setLoader } = useContext(CommonContext);
  const navigate = useNavigate();

  if (loader) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 z-10 border-green-500 fixed top-[50%] left-[50%]"></div>
    );
  }

  // ============List Item==========
  const navLink = (
    <>
      <li className="flex font-semibold">
        <Link
          rel="noopener noreferrer"
          to="/"
          className={
            "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
          }
        >
          Home
        </Link>
      </li>

      <li className="flex font-semibold">
        <Link
          rel="noopener noreferrer"
          to="/updateProfile"
          className={
            "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
          }
        >
          Update Profile
        </Link>
      </li>

      {user && (
        <li className="flex font-semibold">
          <Link
            to="/contact"
            className={
              "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
            }
          >
            Contact Us{" "}
          </Link>
        </li>
      )}

      {user ? (
        <li className="flex items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-slate-100">
            <img
              src={user.photoURL}
              className="w-full h-full object-cover object-center rounded-full"
              alt=""
              data-tooltip-id="my-tooltip-1"
            />
            <ReactTooltip id="my-tooltip-1" place="left" content={user.displayName} />
          </div>

          <button onClick={() => firebaseLogOut()} className="self-center px-8 py-3 rounded font-semibold">
            Sign out
          </button>
        </li>
      ) : (
        <li className="flex font-semibold">
          <Link to="/login" className="self-center px-8 py-3 rounded font-semibold ">
            Sign in
          </Link>
        </li>
      )}
    </>
  );

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          icon: "success",
          title: "Successfully Login!",
          showConfirmButton: false,
          timer: 1500,
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

  const handleGithub = () => {
    githubLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Login!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(location?.state ? location.state : "/");
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
    <div>
      <footer className=" dark:bg-gray-100 bg-green-950 dark:text-gray-900">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            {navLink}
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>

              <button onClick={handleGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="pb-10 pt-5 border-t-2 border-green-900">
          <p className="text-center text-red-500"> &copy; All Right recurved for 2024 </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
