import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SaleCart = ({ sale }) => {
  console.log(sale);
  const { image, estate_title, segment_name, description, price, status, area, location, facilities, id } = sale;
  console.log(sale);

  const sliceDes = description.slice(0, 200);

  return (
    <div className="min-h-[1016px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 animate__animated animate__fadeInDown"
      />

      <div className="flex min-h-[calc(1016px-288px)] flex-col justify-between p-6 space-y-8">
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-semibold tracking-wide animate__animated animate__fadeInLeft  animate__slow  ">{estate_title}</h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <p className=" text-center text-lime-500 mt-2 font-normal bg-lime-100 px-3 py-2 rounded-full animate__animated animate__fadeInLeft animate__slower  ">
              {" "}
              {location}
            </p>
            <p className="text-center text-lime-500 mt-2 font-normal bg-lime-100 px-3 py-2 rounded-full animate__animated animate__fadeInRight animate__slow">
              {" "}
              {segment_name}
            </p>
          </div>

          <p className="dark:text-gray-800  font-normal text-md animate__animated animate__fadeInLeft animate__slower  ">{sliceDes}...</p>

          <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-5">
            <p className="px-6 py-2 rounded-full text-green-500 bg-green-100 animate__animated animate__fadeInLeft animate__slow">
              {status}
            </p>
            <p className="px-6 py-2 rounded-full text-red-500 bg-red-100 animate__animated animate__fadeInRight animate__slow">
              Price: ${price}
            </p>
          </div>
          <p className="text-center mt-5 bg-blue-100 px-6 py-2 rounded-full text-blue-600 animate__animated animate__fadeInDown animate__slow">
            Area: {area} sq ft
          </p>

          <div>
            <h3 className="underline">Facilities</h3>
            <ul className="font-normal list-disc ml-5">
              {facilities.slice(0, 3).map((fac, idx) => (
                <li key={idx} className="animate__animated animate__fadeInLeft animate__slower">
                  {fac}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
  );
};

export default SaleCart;

SaleCart.propTypes = {
  sale: PropTypes.object,
};
