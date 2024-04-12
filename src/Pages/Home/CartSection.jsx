import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllCart from "./AllCart";
import Rent from "./Rent";
import Sell from "./Sell";

const CartSection = () => {
  return (
    <div className=" mt-10 lg:mt-24 container mx-auto p-3">
      <div className="text-center space-y-3 mb-5 lg:mb-10">
        <p className="text-green-500 font-semibold text-sm lg:text-lg animate__animated animate__fadeInDown animate__slow">
          Our Featured Properties For Sale and Rent
        </p>
        <h3 className="font-bold text-2xl lg:text-4xl animate__animated animate__fadeInUp animate__slow animate__delay-1s">
          Properties For Sale & Rent
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
