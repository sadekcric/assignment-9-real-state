import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import moment from "moment";

const Testimonial = () => {
  const [tesCart, setTesCart] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTesCart(data.testimonials));
  }, []);

  console.log(tesCart);

  return (
    <div className="mt-10 lg:mt-24 container mx-auto p-3">
      <div className="text-center mb-5 lg:mb-10">
        <h3 data-aos="fade-down" data-aos-delay="150" data-aos-duration="1000" className="font-bold text-3xl lg:text-5xl ">
          TESTIMONIAL
        </h3>

        <p
          className="text-green-500 mt-3 font-semibold text-sm lg:text-lg "
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          Homebound Bliss: Heartwarming Tales of Home Seekers Finding Their Perfect Haven with Homely Haven
        </p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* slider 1 */}
          <SwiperSlide>
            <div className=" flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img src={tesCart[0]?.profile_picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold">{tesCart[0]?.name}</h4>
                      <p className="text-xs dark:text-gray-600">({tesCart[0]?.location})</p>
                    </div>
                    <div>
                      <span className="text-xs dark:text-gray-600">{moment(`${tesCart[0]?.date}`).startOf("days").fromNow()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <FaStar className="text-yellow-600 text-xl" />
                  <span className="text-xl font-bold">{tesCart[0]?.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{tesCart[0]?.comment}</p>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 2 */}
          <SwiperSlide>
            <div className=" flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img src={tesCart[1]?.profile_picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold">{tesCart[1]?.name}</h4>
                      <p className="text-xs dark:text-gray-600">({tesCart[1]?.location})</p>
                    </div>
                    <div>
                      <span className="text-xs dark:text-gray-600">{moment(`${tesCart[1]?.date}`).startOf("days").fromNow()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <FaStar className="text-yellow-600 text-xl" />
                  <span className="text-xl font-bold">{tesCart[1]?.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{tesCart[1]?.comment}</p>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 3 */}
          <SwiperSlide>
            <div className=" flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img src={tesCart[2]?.profile_picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold">{tesCart[2]?.name}</h4>
                      <p className="text-xs dark:text-gray-600">({tesCart[2]?.location})</p>
                    </div>
                    <div>
                      <span className="text-xs dark:text-gray-600">{moment(`${tesCart[2]?.date}`).startOf("days").fromNow()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <FaStar className="text-yellow-600 text-xl" />
                  <span className="text-xl font-bold">{tesCart[2]?.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{tesCart[2]?.comment}</p>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 4 */}
          <SwiperSlide>
            <div className=" flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img src={tesCart[3]?.profile_picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold">{tesCart[3]?.name}</h4>
                      <p className="text-xs dark:text-gray-600">({tesCart[3]?.location})</p>
                    </div>
                    <div>
                      <span className="text-xs dark:text-gray-600">{moment(`${tesCart[3]?.date}`).startOf("days").fromNow()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <FaStar className="text-yellow-600 text-xl" />
                  <span className="text-xl font-bold">{tesCart[3]?.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{tesCart[3]?.comment}</p>
              </div>
            </div>
          </SwiperSlide>

          {/* slider 5 */}
          <SwiperSlide>
            <div className=" flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img src={tesCart[4]?.profile_picture} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold">{tesCart[4]?.name}</h4>
                      <p className="text-xs dark:text-gray-600">({tesCart[4]?.location})</p>
                    </div>
                    <div>
                      <span className="text-xs dark:text-gray-600">{moment(`${tesCart[4]?.date}`).startOf("days").fromNow()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <FaStar className="text-yellow-600 text-xl" />
                  <span className="text-xl font-bold">{tesCart[4]?.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{tesCart[4]?.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
