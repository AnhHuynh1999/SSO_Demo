import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

type Props = {
  children: ReactNode,
};

const PrivateRoute = (props: Props) => {
  const userRedux = useSelector((state) => state.users);
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!(userRedux && userRedux.isAuthenticated) && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return props.children;
};

export default PrivateRoute;
