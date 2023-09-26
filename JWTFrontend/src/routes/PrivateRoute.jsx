import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userRedux = useSelector((state) => state.users);
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!(userRedux && userRedux.isAuthenticated) && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
