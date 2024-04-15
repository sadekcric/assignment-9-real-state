import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-green-50 min-h-[calc(100vh-394px)]">
      <div>
        <h1
          data-aos-duration="3000"
          data-aos="fade-down"
          className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500 mt-10"
        >
          {" "}
          CONTACT US{" "}
        </h1>
      </div>
    </div>
  );
};

export default Contact;
