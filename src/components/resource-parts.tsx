import React from "react";
import './resource-parts.css';
import './content-card.css';
import whatsappLogo from '../images/whatsapp.svg';

export const ExternalLink = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">{`${title} : `}</div>
    <a className="content-card-content" target="_blank" rel="noopener noreferrer" href={content}>{content}</a>
  </div>
);

export const Feature = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">{`${title} : `}</div>
    <div className="content-card-content">{content}</div>
  </div>
);

export const WhatsAppLink = ({title, content}: ResourceProps) => (
  <div key={`${title} ${content}`}>
    <div className="feature-name">
      {`${title} : `}
      <a className="content-card-content"
         title="whatsapp group"
         rel="noopener noreferrer"
         href={content} target="_blank">
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
