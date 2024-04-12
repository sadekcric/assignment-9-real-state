import { Link } from "react-router-dom";
import demo from "../../assets/slider1.jpg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CommonContext } from "../../Route/CommonRoute";

const Details = () => {
  const { item } = useContext(CommonContext);
  const { id } = useParams();
  const int = parseInt(id);
  console.log(item);

  const findItem = item.find((i) => i.id === int);

  const { image, estate_title, segment_name, description, price, status, area, location, additional_information, facilities } = findItem;

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500"> View Details </h1>

        <div className="container p-3 mt-10 mx-auto">
          <div className="text-center">
            <img className="w-full h-[350px] object-cover object-center" src={image} alt="" />
          </div>

          <div className="mt-5 space-y-5">
            <h1 className="text-2xl text-center bg-green-50 py-3 lg:text-3xl font-bold">{estate_title}</h1>

            <p>{description}</p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold">Facilities: </h3>
            <ul className="list-disc ml-5">
              <li className=" lg:text-lg">
                {facilities.map((facility, idx) => (
                  <li key={idx}>{facility} </li>
                ))}
              </li>
            </ul>
          </div>

          <div className="overflow-x-scroll lg:overflow-x-auto">
            <table className="w-full text-center mt-10 border border-green-500 ">
              <thead>
                <tr className="border-b border-green-500 bg-green-100">
                  <th className="py-2 px-3 border-r border-green-500">Segment Name</th>
                  <th className="py-2 px-3 border-r border-green-500">Location</th>
                  <th className="py-2 px-3 border-r border-green-500">Status</th>
                  <th className="py-2 px-3 border-r border-green-500">Area</th>
                  <th className="py-2 px-3 border-r border-green-500">Facilities</th>
                  <th className="py-2 px-3 border-r border-green-500">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border-r px-3 border-green-500 py-2">{segment_name}</td>
                  <td className="border-r px-3 border-green-500 py-2">{location}</td>
                  <td className="border-r px-3 border-green-500 py-2">{status}</td>
                  <td className="border-r px-3 border-green-500 py-2">{area}</td>
                  <td className="border-r px-3 border-green-500 py-2">{facilities}</td>
                  <td className="border-r px-3 border-green-500 py-2 text-red-500 font-semibold">{price}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-10">
            <p className="text-xl font-bold underline text-center mb-5">Additional Information:</p>

            <ul className="lg:w-1/2 lg:mx-auto text-center">
              <li className="py-1 border border-green-500 lg:px-10 p-5 border-b-0">
                <span className="text-lg font-semibold ">Bathrooms: </span> {additional_information?.bathrooms || 2} pc.
              </li>
              <li className="py-1 border border-green-500 lg:px-10 p-5 border-b-0">
                <span className="text-lg font-semibold ">Bedroom: </span> {additional_information?.bedrooms || 2} pc.
              </li>
              <li className="py-1 border border-green-500 lg:px-10 p-5 border-b-0">
                <span className="text-lg font-semibold ">Floor: </span> {additional_information?.floor || 1}
              </li>
              <li className="py-1 border border-green-500 lg:px-10 p-5 ">
                <span className="text-lg font-semibold ">Build Year: </span> {additional_information?.year_built || 2010}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
