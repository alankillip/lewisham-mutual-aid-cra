import * as React from "react";

export interface RouteItem {
  path: string,
  component: React.FunctionComponent,
  label: string
}
