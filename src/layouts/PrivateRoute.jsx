/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status

  return isLoggedIn ? children : <Navigate to="/welcome" />;
}

export default PrivateRoute;
