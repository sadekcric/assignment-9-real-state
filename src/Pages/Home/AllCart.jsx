import { useContext } from "react";
import { CommonContext } from "../../Route/CommonRoute";
import Cart from "./Cart";

const AllCart = () => {
  const { item } = useContext(CommonContext);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-10 gap-8">
        {item.map((i) => (
          <Cart key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};

export default AllCart;
