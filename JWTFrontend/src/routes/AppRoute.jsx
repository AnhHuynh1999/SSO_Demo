import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./route";
import { Suspense, useEffect } from "react";
import CustomLoading from "../components/CustomLoading/CustomLoading";

const AppRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token") || "{}");
    if (token && token.isAuthenticated && location.pathname === "/login") {
      navigate("/");
    }
  }, [location]);
  return (
    <Suspense fallback={<CustomLoading />}>
      <Routes>
        {routes.map((route, index) =>
          route.private ? (
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
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRoute;
