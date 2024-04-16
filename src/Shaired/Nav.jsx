import { useContext, useState } from "react";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CommonContext } from "../Route/CommonRoute";
import { Tooltip as ReactTooltip } from "react-tooltip";
import defaultProfile from "../assets/defaultProfile.png";

const Nav = () => {
  const [hide, setHide] = useState("hidden");
  const { user, firebaseLogOut, loader } = useContext(CommonContext);

  if (loader) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 z-10 border-green-500 fixed top-[50%] left-[50%]"></div>
    );
  }

  const handleResponsive = () => {
    if (hide === "hidden") {
      setHide("flex");
    } else {
      setHide("hidden");
    }
  };

  // ============List Item==========
  const navLink = (
    <>
      <li className="flex font-semibold">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-3 flex items-center px-6 -mb-1 bg-green-500 rounded-md dark:border- dark:text-violet-600 dark:border-violet-600 transition"
              : "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="flex font-semibold">
        <NavLink
          rel="noopener noreferrer"
          to="/updateProfile"
          className={({ isActive }) =>
            isActive
              ? "py-3 flex items-center px-6 -mb-1 bg-green-500 rounded-md dark:border- dark:text-violet-600 dark:border-violet-600 transition"
              : "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
          }
        >
          Update Profile
        </NavLink>
      </li>

      {user && (
        <li className="flex font-semibold">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "py-3 flex items-center px-6 -mb-1 bg-green-500 rounded-md dark:border- dark:text-violet-600 dark:border-violet-600 transition"
                : "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
            }
          >
            Contact Us{" "}
          </NavLink>
        </li>
      )}

      {/* for Mobile */}

      {user ? (
        <li className="lg:hidden">
          <button onClick={() => firebaseLogOut()} className="self-center px-8 py-3 rounded font-semibold">
            Sign out
          </button>
        </li>
      ) : (
        <li className="lg:hidden">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "py-3 flex items-center px-6 -mb-1 bg-green-500 rounded-md dark:border- dark:text-violet-600 dark:border-violet-600 transition"
                : "flex items-center py-3 px-6 -mb-1 border-b-2 border-green-500 dark:border- dark:text-violet-600 dark:border-violet-600 transition"
            }
          >
            Sign in
          </NavLink>
        </li>
      )}
    </>
  );

  // =============jsx ===========
  return (
    <header className="lg:px-4 p-2 lg:py-5 shadow-2xl  dark:bg-gray-100 dark:text-gray-800">
      <div className="container relative flex items-center justify-between h-16 mx-auto">
        <Link to="/" rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
          <div className="flex items-center gap-3">
            <div>
              <FaHome className="text-5xl lg:text-7xl text-green-500" />
            </div>
            <p className="uppercase font-bold lg:text-xl text-sm">
              <span className="text-green-500">Homely</span>
              <br />
              <span>Haven</span>
              <div className="border-b-2 border-green-500"></div>
            </p>
          </div>
        </Link>

        <ul className="items-stretch hidden space-x-3 lg:flex">{navLink}</ul>

        {/* =========for Mobile======== */}
        <ul
          className={`items-end absolute top-16 w-full right-0 container ${hide} space-x-3 flex-col gap-3 w-full lg:hidden bg-green-950 p-5`}
        >
          {navLink}
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex relative">
          {/* Condition */}
          {user ? (
            <div className="flex items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-slate-100">
                <img
                  src={user?.photoURL || defaultProfile}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-full"
                  data-tooltip-id="my-tooltip-1"
                />
                <ReactTooltip id="my-tooltip-1" place="left" content={user.displayName} />
              </div>

              <button onClick={() => firebaseLogOut()} className="self-center px-8 py-3 rounded font-semibold">
                Sign out
              </button>
            </div>
          ) : (
            <Link to="/login" className="self-center px-8 py-3 rounded font-semibold ">
              Sign in
            </Link>
          )}
        </div>

        <div className="flex items-center lg:hidden">
          {user && (
            <div className="w-8 h-8 rounded-full bg-slate-100">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-full h-full object-cover object-center rounded-full"
                  alt=""
                  data-tooltip-id="my-tooltip-1"
                />
              ) : (
                <FaRegUserCircle />
              )}
              <ReactTooltip id="my-tooltip-1" place="left" content={user.displayName} />
            </div>
          )}

          <button onClick={handleResponsive} className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
