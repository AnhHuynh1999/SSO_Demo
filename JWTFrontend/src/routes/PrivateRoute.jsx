import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem("token") || "{}");
  const location = useLocation();
  if (!(token && token.isAuthenticated)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
