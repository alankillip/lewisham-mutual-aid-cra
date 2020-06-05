import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {menu} from './Routes';
import {RouteItem} from "./models-app/Route";


const page = (route: RouteItem, index: number) => {
  const RouteComponent = route.component;
  console.log('route.component', route.component);
  return (
    <Route exact={index === 0} path={route.path} key={route.path}>
      <RouteComponent />
    </Route>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          {menu.map((route: RouteItem) => (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <Switch>
          {menu.map(page)}
        </Switch>
      </div>
    </Router>
  );
}
