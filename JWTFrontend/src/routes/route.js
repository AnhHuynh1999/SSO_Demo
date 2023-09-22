import Home from "../views/Home/Home";
import Login from "../views/Login/Login";

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
    component: Login,
  },
];

export default routes;
