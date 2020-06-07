import React, {RefObject} from "react";
import {RouteItem} from "../models-app/Route";
import SubMenu from './sub-menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History, LocationState} from 'history';

class MenuItem extends React.PureComponent<Props, {isOpen: boolean}> {

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isOpen: false
    }
  }

  private ref: RefObject<HTMLDivElement>;

  setOpen = (isOpen: boolean) => {
    this.setState(
      {
        isOpen
      }
    )
  };

  handleClick = () => {
    const {path} = this.props.route;
    const {isOpen} = this.state;
    if (path) {
      this.props.history.push(path);
    } else {
      this.setOpen(!isOpen);
    }
  };

  handleMouseLeave = () => {
    this.setOpen(false);
  };

  render() {
    const {className, route} = this.props;
    const {label, routes} = route;
    const {isOpen} = this.state;
    const selected = isOpen ? 'menu-item-selected' : '';
    return (
      <div onClick={this.handleClick} onMouseLeave={this.handleMouseLeave} >
        <div className={`${className} ${selected}`} key={route.path}>
          {label}
        </div>
        {isOpen && <SubMenu routes={routes} />}
      </div>
    );
  }
};

export interface Props extends RouteComponentProps {
  route: RouteItem,
  history: History<LocationState>,
  className: 'menu-item' | 'sub-menu-item'
}

export default withRouter(MenuItem);
