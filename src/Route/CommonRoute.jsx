import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const CommonContext = createContext(null);
const CommonRoute = ({ children }) => {
  const [item, setItem] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const firebaseRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  console.log(user);

  const info = { item, firebaseRegister, setUser };

  return <CommonContext.Provider value={info}>{children}</CommonContext.Provider>;
};

export default CommonRoute;

CommonRoute.propTypes = {
  children: PropTypes.node,
};
