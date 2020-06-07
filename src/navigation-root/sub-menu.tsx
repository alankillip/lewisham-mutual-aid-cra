import React, {RefObject} from 'react';
import {RouteItem} from "../models-app/Route";
import MenuItem from "./menu-item";

class SubMenu extends React.Component<Props, {width: number}> {
  static defaultProps = {
      parentWidth: 0
  };
  private ref: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
    this.state = (
      {
        width: 0
      }
    )
  }

  getSubRouteComponent = (route: RouteItem) => {
    return <MenuItem route={route} key={route.label} className={'sub-menu-item'}/>;
  };

  getSubRouteComponents = () => {
    const {routes} = this.props;
    return routes ? routes.map(this.getSubRouteComponent) : null;
  };

  componentDidMount() {
    if (this.ref.current) {
      const {width} = this.ref.current.getBoundingClientRect();
      this.setState(
        {
          width
        }
      )
    }
  }

  render() {
    const {isOpen, parentX, parentWidth} = this.props;
    const {width} = this.state;
    const styleObj = {left: parentX - width + parentWidth};
    return (
      <div style={styleObj} ref={this.ref} className="sub-menu">
        {isOpen && this.getSubRouteComponents()}
      </div>
    );
  }
}

export interface Props {
  routes: RouteItem[] | undefined,
  isOpen: boolean;
  parentWidth: number,
  parentX: number,
}

export default SubMenu;
