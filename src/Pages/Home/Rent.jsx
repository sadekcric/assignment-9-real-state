import { useContext } from "react";
import { CommonContext } from "../../Route/CommonRoute";
import RentCart from "./RentCart";

const Rent = () => {
  const { item } = useContext(CommonContext);
  const filterRent = item.filter((i) => i.status === "Rent");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-8">
      {filterRent.map((rent) => (
        <RentCart key={rent.id} rent={rent} />
      ))}
    </div>
  );
};

export default Rent;
