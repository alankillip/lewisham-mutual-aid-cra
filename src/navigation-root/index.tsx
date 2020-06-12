import * as React from "react";
import {Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import './app.css';
import {menu, resourcesMenu, groupsMenu} from "../Routes";
import {RouteItem} from "../models-app/Route";
import MenuItem from './menu-item';
import page from './page';

const filterPages = (route: RouteItem) => route.path !== undefined;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="top-bar">
            <div className="site-title">Lewisham Mutual Aid</div>
            <div className="menu">
              {menu.map((route: RouteItem) => <MenuItem key={route.label} route={route} className="menu-item" />)}
            </div>
          </div>
          <Switch>
            {menu.concat(resourcesMenu).concat(groupsMenu).filter(filterPages).map(page)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
