import React, {useState} from "react";
import {RouteItem} from "../models-app/Route";
import {useHistory} from "react-router";

const MenuItem: React.FunctionComponent<Props> = (props: Props) => {
  let history = useHistory();
  const {path} = props.route;
  const [open, setOpen] = useState(false);
  const handleClick = () => () => {
    if (path) {
      history.push(path);
    } else {
      setOpen(!open);
    }
  };

  const handleMouseLeave = () => () => {
    console.log('handleMouseLeave');
    setOpen(false);
  };

  const getSubRouteComponent = (route: RouteItem) => {
    return <MenuItem route={route} key={route.label} className={'sub-menu-item'} />;
  };

  const getSubRouteComponents = () => {
    const {routes} = props.route;
    return routes && open ? routes.map(getSubRouteComponent) : null;
  };
  const {className} = props;
  return (
    <div onClick={handleClick()} onMouseLeave={handleMouseLeave()} >
      <div className={className} key={props.route.path}>
        {props.route.label}
      </div>
      <div className="sub-menu">
        {getSubRouteComponents()}
      </div>
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
