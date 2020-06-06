import React from "react";
import {RouteItem} from "../models-app/Route";
import {useHistory} from "react-router";

const MenuItem: React.FunctionComponent<RouteItem> = (route: RouteItem) => {
  let history = useHistory();
  const {path} = route;
  const handleClick = () => () => {
    if (path) {
      history.push(path);
    } else {
      console.log('open menu');
    }
  };

  return (
    <div className={`menu-item`} onClick={handleClick()} key={route.path}>
      {route.label}
    </div>
  );
};

export default MenuItem;
