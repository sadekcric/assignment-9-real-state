import { Helmet } from "react-helmet-async";
import CartSection from "./CartSection";
import Slider from "./Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Homely Haven | home</title>
      </Helmet>
      <Slider />

      <CartSection />
      <Testimonial />
    </>
  );
};

export default Home;
