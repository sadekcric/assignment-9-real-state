import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCart from "./AllCart";
import Rent from "./Rent";
import Sell from "./Sell";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CartSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mt-10 lg:mt-24 container mx-auto p-3">
      <div className="text-center space-y-3 mb-5 lg:mb-10">
        <p className="text-green-500 font-semibold text-sm lg:text-lg " data-aos="fade-down" data-aos-delay="150" data-aos-duration="1000">
          Our Featured Properties For Sale and Rent
        </p>
        <h3 data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" className="font-bold text-3xl lg:text-5xl ">
          Estates
        </h3>
      </div>
      <div className="text-xl font-semibold">
        <Tabs>
          <TabList>
            <Tab>
              <span className="lg:px-6 lg:py-3">All</span>
            </Tab>
            <Tab>
              <span className="lg:px-6 lg:py-3">Sale</span>
            </Tab>
            <Tab>
              <span className="lg:px-6 lg:py-3">Rent</span>
            </Tab>
          </TabList>

          <TabPanel>
            <AllCart />
          </TabPanel>
          <TabPanel>
            <Sell />
          </TabPanel>
          <TabPanel>
            <Rent />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CartSection;
