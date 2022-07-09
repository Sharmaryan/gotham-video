import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const {user:isLoggedIn}  = useSelector((state) => state.auth);
  const location = useLocation();
  return isLoggedIn ? children : <Navigate state={{from:location}} to="/login" replace />;
};
