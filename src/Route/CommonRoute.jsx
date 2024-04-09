import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CommonContext = createContext(null);
const CommonRoute = ({ children }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const info = { item };

  return <CommonContext.Provider value={info}>{children}</CommonContext.Provider>;
};

export default CommonRoute;

CommonRoute.propTypes = {
  children: PropTypes.node,
};
