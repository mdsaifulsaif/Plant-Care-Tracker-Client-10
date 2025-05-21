import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUSer] = useState(null);
  const [userLodding, setUserLodding] = useState(true);
  // register user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google Login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const authData = {
    namee: "saifulislamgmail",
    createUser,
    loginUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
