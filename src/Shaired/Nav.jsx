import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [hide, setHide] = useState("hidden");

  const handleResponsive = () => {
    if (hide === "hidden") {
      setHide("flex");
    } else {
      setHide("hidden");
    }
  };
  console.log(hide);

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
        <ul className={`items-end absolute top-20 right-0 container ${hide} space-x-3 flex-col gap-3 w-full lg:hidden`}>{navLink}</ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>

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
    </header>
  );
};

export default Nav;
