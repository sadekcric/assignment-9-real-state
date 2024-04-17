import { Outlet } from "react-router-dom";
import Nav from "../Shaired/Nav";
import Footer from "../Shaired/Footer";

const Root = () => {
  return (
    <div className="font-poppins ">
      <div className=" bg-green-950 sticky top-0 z-50 text-white">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-394px)] bg-white">
        <Outlet />
      </div>
      <div className="bg-green-950 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
