import React from "react"
import {Link} from '../models-content/Link'
import './content-card.css'

const LinkComponent = (props: LinkComponentProps) => {
  const {links} = props;
  const generalLinks = links.filter(({type}: Link) => type === 'general');
  const charityLinks = links.filter(({type}: Link) => type === 'charity');
  return (
    <div>
      {links.length > 0 && <div className="title">General Links:</div>}
      {generalLinks.map(
      (link: Link, index: number) => (
        <div key={index} className="content-card">
          {<a className="content-card-content" target="_blank" rel="noopener noreferrer"  href={link.link}>{link.name}</a> }
        </div>
      ))}
      {links.length > 0 && <div className="title">Charity Links:</div>}
      {charityLinks.map(
        (link: Link, index: number) => (
          <div key={index} className="content-card">
            {<a className="content-card-content" target="_blank" rel="noopener noreferrer"  href={link.link}>{link.name}</a> }
          </div>
        ))}
    </div>)
};

interface LinkComponentProps {
  links: Link[];
}

export default LinkComponent;
