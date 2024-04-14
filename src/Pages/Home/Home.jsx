import { Helmet } from "react-helmet-async";
import CartSection from "./CartSection";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Homely Haven | home</title>
      </Helmet>
      <Slider />

      <CartSection />
    </>
  );
};

export default Home;
