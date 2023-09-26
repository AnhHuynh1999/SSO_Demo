import React from "react";

const Home = React.lazy(() => import("../views/Home/Home"));
const LoginRegister = React.lazy(() =>
  import("../views/LoginRegister/LoginRegister")
);
const Page404 = React.lazy(() => import("../views/PageError/Page404/Page404"));
const ManageUser = React.lazy(() => import("../views/Users/ManageUser"));
const routes = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "users",
    private: true,
    exact: true,
    Component: ManageUser,
  },
  {
    path: "/login",
    exact: true,
    Component: LoginRegister,
  },
  {
    path: "*",
    Component: Page404,
  },
];

export default routes;
