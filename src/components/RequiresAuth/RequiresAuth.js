import { useAuth } from "context/auth-context/auth-context";
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const { auth:{auth:isLoggedIn} } = useAuth();
  const location = useLocation();
  return isLoggedIn ? children : <Navigate state={{from:location}} to="/login" replace />;
};
