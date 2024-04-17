import { useParams, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./style.css";
import "leaflet/dist/leaflet.css";

const Details = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const defaultIcon = L.icon({
    iconUrl: "https://i.ibb.co/xzBHMC5/pin-1.png",
    iconSize: [41, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
  });
  console.log(defaultIcon);

  const item = useLoaderData();

  const { id } = useParams();
  const int = parseInt(id);

  const findItem = item.find((i) => i.id === int);

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    additional_information,
    facilities,
    latitude,
    longitude,
  } = findItem;

  return (
    <div className="mt-10">
      <Helmet>
        <title>Homely Haven | Details</title>
      </Helmet>
      <div>
        <h1
          data-aos-duration="3000"
          data-aos="fade-down"
          className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500 "
        >
          {" "}
          View Details{" "}
        </h1>

        <div className="container p-3 mt-10 mx-auto">
          <div data-aos-duration="3000" data-aos="fade-down" data-aos-delay="100" className="text-center">
            <img className="w-full h-[350px] object-cover object-center" src={image} alt="" />
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="mt-5 space-y-5">
            <h1 className="text-2xl text-center bg-green-50 py-3 lg:text-3xl font-bold">{estate_title}</h1>

            <p>{description}</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="mt-10">
            <h3 className="font-semibold">Facilities: </h3>
            <ul className="list-disc ml-5">
              <li className=" lg:text-lg">
                {facilities.map((facility, idx) => (
                  <li key={idx}>{facility} </li>
                ))}
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="overflow-x-scroll lg:overflow-x-auto">
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
                  <td className="border-r px-3 border-green-500 py-2">
                    {facilities.map((facility, index) => (
                      <span key={index}>{facility}, </span>
                    ))}
                  </td>
                  <td className="border-r px-3 border-green-500 py-2 text-red-500 font-semibold">{price}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 lg:mt-24">
            <div data-aos="fade-up" data-aos-duration="3000" className="mt-5 space-y-5">
              <h1 className="text-2xl text-center py-3 bg-green-50 lg:text-3xl font-bold mb-5 lg:mb-10">Location</h1>
            </div>

            <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]} icon={defaultIcon}>
                <Popup>{location}</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="mt-10 lg:mt-24">
            <div data-aos="fade-up" data-aos-duration="3000" className="mt-5 space-y-5">
              <h1 className="text-2xl text-center py-3 bg-green-50 lg:text-3xl font-bold mb-5 lg:mb-10">Additional Information</h1>
            </div>

            <ul className="lg:w-1/2 lg:mx-auto text-center mb-10">
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
