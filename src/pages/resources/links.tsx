import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import LinkComponent from '../../components/link-component';

const Links = () => {
  const linksSelector = (state: State) => state.resources.links;
  const links = useSelector(linksSelector);
  return (
    <LinkComponent links={links} />
  )};

export default Links;
