import React from "react"
import {Link} from '../models-content/Link'
import './content-card.css'
import {ExternalLink} from './resource-parts';

const LinkComponent = (props: LinkComponentProps) => {
  const {links} = props;
  const generalLinks = links.filter(({type}: Link) => type === 'general');
  const toolsLinks = links.filter(({type}: Link) => type === 'tools');
  const charityLinks = links.filter(({type}: Link) => type === 'charity');
  return (
    <div>
      {links.length > 0 && <div className="title">General Advice and Guidance:</div>}
      {generalLinks.map(
      (link: Link, index: number) => (
        <div key={index} className="content-card">
          <ExternalLink url={link.link} text={link.name} />
        </div>
      ))}
      {toolsLinks.length > 0 && <div className="title">Mutual Aid Volunteer Tools:</div>}
      {charityLinks.map(
        (link: Link, index: number) => (
          <div key={index} className="content-card">
            <ExternalLink url={link.link} text={link.name} />
          </div>
        ))}
      {links.length > 0 && <div className="title">Charity Links:</div>}
      {charityLinks.map(
        (link: Link, index: number) => (
          <div key={index} className="content-card">
            <ExternalLink url={link.link} text={link.name} />
          </div>
        ))}
    </div>)
};

interface LinkComponentProps {
  links: Link[];
}

export default LinkComponent;
