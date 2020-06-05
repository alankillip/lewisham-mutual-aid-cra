import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import {menu} from './Routes';
import {RouteItem} from "./models-app/Route";

const page = (route: RouteItem, index: number) => {
  const RouteComponent = route.component;
  return (
    <Route exact={index === 0} path={route.path} key={route.path}>
      <RouteComponent />
    </Route>
  );
};

const MenuItem: React.FunctionComponent<RouteItem> = (route: RouteItem) => {
  let history = useHistory();

  const handleClick = (path: string) => () => {
    history.push(path);
  }

  return (
    <div onClick={handleClick(route.path)} key={route.path}>
      {route.label}
    </div>
  );
};


export default function App() {
  return (
    <Router>
      <div>
        {menu.map((route: RouteItem) => <MenuItem {...route} />)}
        <Switch>
          {menu.map(page)}
        </Switch>
      </div>
    </Router>
  );
}
