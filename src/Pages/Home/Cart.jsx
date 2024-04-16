import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cart = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { image, estate_title, segment_name, description, price, status, area, location, facilities, id } = item;

  const sliceDes = description.slice(0, 100);

  return (
    <>
      <div className="min-h-[780px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 relative">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />

        <div className="flex min-h-[calc(780px-288px)]  flex-col justify-between p-6 space-y-8 ">
          <div className="space-y-5">
            <div>
              <h2
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                className="text-xl font-semibold tracking-wide "
              >
                {estate_title}
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className=" text-center text-lime-500 mt-2 font-semibold bg-lime-100 px-3 py-2 rounded-full text-sm "
              >
                {" "}
                {location}
              </p>
              <p
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="text-center text-lime-500 mt-2 font-semibold bg-lime-100 px-3 py-2 rounded-full text-sm "
              >
                {" "}
                {segment_name}
              </p>
            </div>

            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="dark:text-gray-800 font-normal text-md "
            >
              {sliceDes}...
            </p>

            <p
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="px-6 py-2 rounded-full text-green-500 bg-green-100 absolute top-0 left-1 text-sm"
            >
              {status}
            </p>
            <p
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="px-6 py-2 rounded-full text-red-500 bg-red-100 absolute top-0 right-1 text-sm"
            >
              Price: ${price}
            </p>

            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="50" data-aos-duration="1000">
              <p className="text-center mt-5 bg-blue-100 px-6 py-2 rounded-full text-blue-600 animate__animated animate__fadeInDown animate__slow text-sm">
                Area: {area} sq ft
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000">
              <h3 className="underline">Facilities</h3>
              <ul className="font-normal list-disc ml-5 text-sm">
                {facilities.slice(0, 3).map((fac, idx) => (
                  <li key={idx} className="animate__animated animate__fadeInLeft animate__slower">
                    {fac}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
            <Link to={`/property/${id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 animate__animated animate__fadeInUp animate__delay-1s animate__slow bg-green-400 text-white"
              >
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

Cart.propTypes = {
  item: PropTypes.object,
};
