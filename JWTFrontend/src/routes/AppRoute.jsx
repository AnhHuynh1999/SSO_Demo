import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./route";
import { Suspense, useEffect } from "react";
import CustomLoading from "../components/CustomLoading/CustomLoading";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../actions/userAction";
import Layout from "../components/Layout";

const AppRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userRedux = useSelector((state) => state.users);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const routeNoLayout = routes.filter((x) => !x.private);
  const routeLayout = routes.filter((x) => x.private);

  useEffect(() => {
    if (token) {
      dispatch(userAction.getInfoUser());
    }
  }, []);

  useEffect(() => {
    if (
      userRedux &&
      userRedux.isAuthenticated &&
      location.pathname === "/login"
    ) {
      navigate("/users");
    }
  }, [location, userRedux, token]);

  const renderRoute = (route, index) => {
    return route.private ? (
      <Route
        key={`route-${index}`}
        path={route.path}
        exact={route.exact || false}
        element={
          <PrivateRoute>
            <route.Component />
          </PrivateRoute>
        }
      />
    ) : (
      <Route key={`route-${index}`} {...route} />
    );
  };

  return (
    <Suspense fallback={<CustomLoading />}>
      <Routes>
        {routeNoLayout.map((route, index) => renderRoute(route, index))}
        <Route path="/" element={<Layout />}>
          {routeLayout.map((x, i) => renderRoute(x, i))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
