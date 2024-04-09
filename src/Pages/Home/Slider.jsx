import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";
import SliderTitle from "./SliderTitle";

const Slider = () => {
  return (
    <>
      <Swiper navigation={true} autoplay={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div className="min-h-[calc(100vh-104px)] slider1 flex items-center justify-center">{<SliderTitle />}</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[calc(100vh-104px)] slider2 flex items-center justify-center">
            <SliderTitle />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[calc(100vh-104px)] slider3 flex items-center justify-center">
            <SliderTitle />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
