import { useContext } from "react";
import { CommonContext } from "../../Route/CommonRoute";
import SaleCart from "./SaleCart";

const Sell = () => {
  const { item } = useContext(CommonContext);

  const sellFilter = item.filter((i) => i.status === "Sale");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-8">
      {sellFilter.map((sale) => (
        <SaleCart key={sale.id} sale={sale} />
      ))}
    </div>
  );
};

export default Sell;
