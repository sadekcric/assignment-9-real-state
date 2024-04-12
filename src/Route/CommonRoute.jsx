import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const CommonContext = createContext(null);
const CommonRoute = ({ children }) => {
  const [item, setItem] = useState([]);
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  // firebase Register
  const firebaseRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Firebase Login
  const firebaseLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Firebase Logout
  const firebaseLogOut = () => {
    return signOut(auth);
  };

  // Firebase AuthChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      return setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // pass Item
  const info = { item, firebaseRegister, setUser, firebaseLogin, user, firebaseLogOut, loader };

  return <CommonContext.Provider value={info}>{children}</CommonContext.Provider>;
};

export default CommonRoute;

CommonRoute.propTypes = {
  children: PropTypes.node,
};
