import Home from "../views/Home/Home";
import LoginRegister from "../views/LoginRegister/LoginRegister";

const routes = [
  {
    path: "/",
    private: true,
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    private: true,
    exact: true,
    component: LoginRegister,
  },
];

export default routes;
