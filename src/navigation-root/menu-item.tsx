import React, {useState} from "react";
import {useHistory} from "react-router";
import {RouteItem} from "../models-app/Route";
import SubMenu from './sub-menu';

const MenuItem: React.FunctionComponent<Props> = (props: Props) => {
  let history = useHistory();
  const {path, label, routes} = props.route;
  const [open, setOpen] = useState(false);
  const handleClick = () => () => {
    if (path) {
      history.push(path);
    } else {
      setOpen(!open);
    }
  };

  const handleMouseLeave = () => () => {
    setOpen(false);
  };

  const {className} = props;
  const selected = open ? 'menu-item-selected' : '';
  return (
    <div onClick={handleClick()} onMouseLeave={handleMouseLeave()} >
      <div className={`${className} ${selected}`} key={props.route.path}>
        {label}
      </div>
      {<SubMenu routes={routes} open={open} />}
    </div>
  );
};

MenuItem.defaultProps = {
  className: 'menu-item'
};

export interface Props {
  route: RouteItem,
  className?: 'menu-item' | 'sub-menu-item'
}

export default MenuItem;
