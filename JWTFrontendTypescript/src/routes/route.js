import React from "react";

const Home = React.lazy(() => import("../view/Home/Home"));
const LoginRegister = React.lazy(() =>
  import("../view/LoginRegister/LoginRegister")
);

const routes = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/login",
    exact: true,
    Component: LoginRegister,
  },
];

export default routes
