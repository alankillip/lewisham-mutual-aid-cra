import React from "react";
import './resource-parts.css';
import './content-card.css';
import whatsappLogo from '../images/whatsapp.svg';
import TextWithSearchHilite from "./text-with-search-hilite";
import {checkProtocolPrefix} from "./utils";

export const ExternalLink = (props: { url: string, text: string }) => (
  <a target="_blank" rel="noopener noreferrer"
     href={checkProtocolPrefix(props.url)}><TextWithSearchHilite text={props.text}/></a>);

export const ExternalLinkWrapper = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">{`${title} : `}</div>
    <ExternalLink url={content} text={content} />
  </div>
);

export const Feature = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">{`${title} : `}</div>
    <div className="content-card-content"><TextWithSearchHilite text={content}/></div>
  </div>
);

export const WhatsAppLink = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">
      {`${title} : `}
      <a className="content-card-content"
         title="whatsapp group"
         rel="noopener noreferrer"
         href={checkProtocolPrefix(content)} target="_blank">
        <img
          className="whatsapp"
          width="20px"
          alt="whatsapp"
          src={whatsappLogo}/>
      </a>
    </div>
  </div>
);

interface ResourceProps {
  title: string,
  content: string
}
