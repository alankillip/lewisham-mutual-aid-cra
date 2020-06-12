import React from "react"
import {Link} from '../models-content/Link'
import './content-card.css'

const LinkComponent = (props: LinkComponentProps) => {
  const {links} = props;
  const generalLinks = links.filter(({type}: Link) => type === 'general');
  const charityLinks = links.filter(({type}: Link) => type === 'charity');
  return (
    <div>
      <div className="title">General Links:</div>
      {generalLinks.map(
      (link: Link, index: number) => (
        <div key={index} className="content-card">
          {<a className="content-card-content" href={link.link}>{link.name}</a> }
        </div>
      ))}
      <div className="title">General Links:</div>
      {charityLinks.map(
        (link: Link, index: number) => (
          <div key={index} className="content-card">
            {<a className="content-card-content" href={link.link}>{link.name}</a> }
          </div>
        ))}
    </div>)
};

interface LinkComponentProps {
  links: Link[];
}

export default LinkComponent;