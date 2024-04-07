import { Outlet } from "react-router-dom";
import Nav from "../Shaired/Nav";

const Root = () => {
  return (
    <div className="bg-blue-950 text-white min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
