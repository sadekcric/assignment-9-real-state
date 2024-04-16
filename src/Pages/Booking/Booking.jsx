import formImg from "../../assets/booking.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { CommonContext } from "../../Route/CommonRoute";

const Booking = () => {
  const { user } = useContext(CommonContext);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const title = e.target.estate.value;
    const number = e.target.number.value;
    const address = e.target.address.value;

    if (!user) {
      return Swal.fire({
        title: "Error!",
        text: "Please Login First",
        icon: "error",
        confirmButtonText: "Back",
      });
    }
    if (number < 11) {
      return Swal.fire({
        title: "Error!",
        text: "Invalid Number",
        icon: "error",
        confirmButtonText: "Back",
      });
    }

    if (user) {
      Swal.fire({
        icon: "success",
        title: "Successfully Registered!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    console.log(title, number, address);
    e.target.reset();
  };

  return (
    <div className="mt-10 lg:mt-24 ">
      {/* Title */}
      <div className="text-center mb-5 lg:mb-10 ">
        <p className="text-green-500 font-semibold text-sm lg:text-lg " data-aos="fade-down" data-aos-delay="150" data-aos-duration="1000">
          Enchanting Escapes: Book Your Dream Getaway Today!
        </p>

        <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="font-bold mt-3 text-3xl lg:text-5xl ">
          BOOKING
        </h3>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="bg-green-50 rounded-t-full border-4 border-green-500 overflow-hidden border-b-0"
      >
        <div className="container mx-auto p-3  ">
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="flex-1">
              <img src={formImg} alt="" className="" />
            </div>

            <form data-aos="zoom-in" data-aos-duration="1500" onSubmit={handleBooking} className="space-y-6 flex-1">
              <div>
                <label htmlFor="estate" className="text-sm text-green-400 font-semibold">
                  Estate Title
                </label>
                <input
                  required
                  id="estate"
                  type="text"
                  name="estate"
                  placeholder=""
                  className="w-full p-3 rounded text-green-600  dark:bg-gray-100 focus:outline-green-500 font-semibold"
                />
              </div>
              <div>
                <label htmlFor="number" className="text-sm text-green-400 font-semibold">
                  Phone Number
                </label>
                <input
                  required
                  id="number"
                  type="number"
                  name="number"
                  className="w-full p-3 rounded text-green-600 dark:bg-gray-100 focus:outline-green-500 font-semibold"
                />
              </div>
              <div>
                <label htmlFor="address" className="text-sm text-green-400 font-semibold">
                  Current Address
                </label>
                <textarea
                  required
                  id="address"
                  name="address"
                  rows="3"
                  className="w-full p-3 rounded text-green-600 font-semibold dark:bg-gray-100 focus:outline-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-300 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50 "
              >
                Conform Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
