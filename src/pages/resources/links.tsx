import React from 'react'
import {useSelector} from 'react-redux'
import {State} from '../../state';
import LinkComponent from '../../components/link-component';
import './resource-page.css'

const Links = () => {
  const linksSelector = (state: State) => state.resources.links;
  const links = useSelector(linksSelector);
  return (
    <div className="resource-page">
      <LinkComponent links={links}/>
    </div>
  )
};

export default Links;
