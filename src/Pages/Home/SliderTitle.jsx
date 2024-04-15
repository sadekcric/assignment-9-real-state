import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommonContext } from "../../Route/CommonRoute";
import Swal from "sweetalert2";

const SliderTitle = () => {
  const { user } = useContext(CommonContext);
  return (
    <div className="container mx-auto p-3 flex flex-col lg:flex-row lg:gap-6 items-start">
      <div className="text-white space-y-3 overflow-hidden lg:space-y-10 lg:flex-1 lg:p-3">
        <h1 className="text-2xl lg:text-5xl font-bold ">
          <span className="animate__animated animate__fadeInLeft animate__slower block">
            Welcome <span className="text-green-500 ">Homely Haven</span>
          </span>{" "}
          <br />
          <span className="pt-2 lg:pt-5 block animate__animated animate__fadeInLeft animate__slow ">Where Comfort Meets Elegance.</span>
        </h1>

        <p className="lg:text-xl text-gray-200 w-5/6 animate__animated animate__fadeInLeft animate__slower">
          Discover your perfect sanctuary with our curated collection of residential properties. Explore homes designed for comfort, style,
          and modern living. Welcome to your new beginning.
        </p>

        {/* button */}
        <Link
          to="/register"
          className="relative inline-flex items-center justify-start px-8 py-5 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group animate__animated animate__slideInUp animate__slow"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-green-100"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            REGISTRATION
          </span>
        </Link>
        {/* Button end */}
      </div>

      <div className="w-[500px] p-5 animate__animated  animate__zoomIn">
        <div className=" bg-white bg-opacity-10 rounded-lg hidden lg:flex">
          <div className="p-5 w-full">
            <h3 className="text-white text-center font-semibold text-2xl">SEGMENTS</h3>
            <div className="border-t border-white"></div>
            <ul className="text-gray-300 list-disc ml-5">
              <li className="mt-3 text-xl animate__animated animate__fadeInRight animate__slower">Apartment</li>
              <li className="mt-3 text-xl animate__animated animate__fadeInRight animate__slower">Single-family home</li>
              <li className="mt-3 text-xl animate__animated animate__fadeInRight animate__slow">Townhouse</li>
              <li className="mt-3 text-xl animate__animated animate__fadeInRight animate__slower">Senior Living</li>
              <li className="mt-3 text-xl animate__animated animate__fadeInRight animate__slow">Vacation Rental</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTitle;
