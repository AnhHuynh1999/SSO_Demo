import React from "react";

const Home = React.lazy(() => import("../views/Home/Home"));
const LoginRegister = React.lazy(() =>
  import("../views/LoginRegister/LoginRegister")
);
const Page404 = React.lazy(() => import("../views/PageError/Page404/Page404"));
const ManageUser = React.lazy(() => import("../views/Users/ManageUser"));
const ManageRole = React.lazy(() => import("../views/Role/ManageRole"));
const AssignRole = React.lazy(() => import("../views/AssignRole/AssignRole"));
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
    path: "/role",
    exact: true,
    private: true,
    Component: ManageRole,
  },
  {
    path: "/assign-role",
    exact: true,
    private: true,
    Component: AssignRole,
  },
  {
    path: "*",
    Component: Page404,
  },
];

export default routes;
