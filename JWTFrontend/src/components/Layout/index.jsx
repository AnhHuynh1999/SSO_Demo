import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <Menu />
      <div className="body-text">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Layout;
