import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import {menu} from './Routes';
import {RouteItem} from "./models-app/Route";
import './App.css';

const page = (route: RouteItem, index: number) => {
  const RouteComponent = route.component;
  return (
    <Route exact={index === 0} path={route.path} key={route.path}>
      <RouteComponent/>
    </Route>
  );
};

const MenuItem: React.FunctionComponent<RouteItem> = (route: RouteItem) => {
  let history = useHistory();

  const handleClick = (path: string) => () => {
    history.push(path);
  };

  return (
    <div className="menu-item" onClick={handleClick(route.path)} key={route.path}>
      {route.label}
    </div>
  );
};


export default function App() {
  return (
    <Router>
      <div>
        <div className="top-bar">
          <div className="site-title">Lewisham Mutual Aid</div>
          <div className="menu">
            {menu.map((route: RouteItem) => <MenuItem {...route} />)}
          </div>
        </div>
        <Switch>
          {menu.map(page)}
        </Switch>
      </div>
    </Router>
  );
}
