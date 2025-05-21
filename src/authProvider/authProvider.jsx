import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [userLodding, setUserLodding] = useState(true);

  console.log(user);
  // register user
  const createUser = (email, password) => {
    setUserLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setUserLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google Login
  const googleLogin = () => {
    setUserLodding(true);
    return signInWithPopup(auth, provider);
  };

  //singout user

  const signOutUser = () => {
    return signOut(auth);
  };

  // get currentUser

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLodding(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    namee: "saifulislamgmail",
    user,
    userLodding,
    setUser,
    createUser,
    loginUser,
    googleLogin,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
