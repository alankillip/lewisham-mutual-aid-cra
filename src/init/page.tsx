import {RouteItem} from "../models-app/Route";
import {Route} from "react-router";
import React from "react";

const page = (route: RouteItem, index: number) => {
  const RouteComponent = route.component;
  return (
    <Route exact={index === 0} path={route.path} key={route.path}>
      <RouteComponent/>
    </Route>
  );
};

export default page;
