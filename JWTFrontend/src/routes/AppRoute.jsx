import {  Route,  } from "react-router-dom";
import PrivateRouter from "./PrivateRoute";
import routes from "./route";

const AppRoute = () => {
  return (
     routes.map((route, index) =>(  route.private ? 
            <PrivateRouter key={`route-${index}`} {...route}  /> : <Route key={`route-${index}`} {...route} />)
    )
  )
};

export default AppRoute;
