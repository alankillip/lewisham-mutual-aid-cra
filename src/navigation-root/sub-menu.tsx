import React, {RefObject} from 'react';
import {RouteItem} from "../models-app/Route";
import MenuItem from "./menu-item";

class SubMenu extends React.Component<Props> {
  private ref: RefObject<HTMLDivElement>;
  private x: number = 0;

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  getSubRouteComponent = (route: RouteItem) => {
    return <MenuItem route={route} key={route.label} className={'sub-menu-item'}/>;
  };

  getSubRouteComponents = () => {
    const {routes, open} = this.props;
    return routes && open ? routes.map(this.getSubRouteComponent) : null;
  };

  componentDidMount() {
    if (this.ref.current) {
      const {left, width} = this.ref.current.getBoundingClientRect();
      console.log('left, width ', left, width);
      this.x = left - width + 105;
    }
  }

  render() {
    const styleObj = this.x !== 0 ? {left: this.x} : {};
    return (
      <div style={styleObj} ref={this.ref} className="sub-menu">
        {this.getSubRouteComponents()}
      </div>
    );
  }
}

export interface Props {
  routes: RouteItem[] | undefined,
  open: boolean
}

export default SubMenu;
