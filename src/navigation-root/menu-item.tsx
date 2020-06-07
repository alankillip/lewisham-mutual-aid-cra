import React, {RefObject} from "react";
import {RouteItem} from "../models-app/Route";
import SubMenu from './sub-menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History, LocationState} from 'history';

class MenuItem extends React.PureComponent<Props, {isOpen: boolean, width: number, left: number}> {

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isOpen: false,
      width: 0,
      left: 0
    }
  }

  private ref: RefObject<HTMLDivElement>;

  setOpen = (isOpen: boolean) => {
    const {current} = this.ref;
    if (current) {
      const {left, width} = current.getBoundingClientRect();
      this.setState(
        {
          isOpen,
          width,
          left
        }
      )
    }
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
    const {isOpen, width, left} = this.state;
    const selected = isOpen ? 'menu-item-selected' : '';
    return (
      <div ref={this.ref} onClick={this.handleClick} onMouseLeave={this.handleMouseLeave} >
        <div className={`${className} ${selected}`} key={route.path}>
          {label}
        </div>
        <SubMenu routes={routes} isOpen={isOpen} parentWidth={width} parentX={left} />
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
