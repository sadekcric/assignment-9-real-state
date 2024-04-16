import { Helmet } from "react-helmet-async";
import CartSection from "./CartSection";
import Slider from "./Slider";
import Testimonial from "./Testimonial/Testimonial";
import Booking from "../Booking/Booking";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Homely Haven | home</title>
      </Helmet>
      <Slider />

      <CartSection />
      <Testimonial />
      <Booking />
    </div>
  );
};

export default Home;
