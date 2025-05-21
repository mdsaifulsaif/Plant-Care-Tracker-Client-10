import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";
import { AuthContext } from "../authProvider/authProvider";

function PrivetRoute({ children }) {
  const { userLodding, user } = useContext(AuthContext);
  console.log(user, "privet route");
  const location = useLocation();

  if (userLodding) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivetRoute;
