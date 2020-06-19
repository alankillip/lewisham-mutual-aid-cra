import React from "react"
import {Content} from "../models-content/Content"
import {
  ExternalLink,
  WhatsAppLink,
  Feature,
} from './resource-parts'


export const getFeatures = (titles: string[], content: Content) => {
  const keys = Object.keys(content);
  const getFeature = (content: string, index: number) => {
    if (index === 0 || content === '') {
      return null;
    }
    const title = titles[index - 1];
    switch (keys[index]) {
      case 'link':
        return <ExternalLink key={index} title={title} content={content} />;
      case 'contactFromOrg':
        if (content.indexOf('https://chat.whatsapp.com/') === 0) {
          return <WhatsAppLink key={index} title={title} content={content} />;
        }
        if (content.indexOf('https://') === 0) {
          return <ExternalLink key={index} title={title} content={content} />;
        }
    }
    return <Feature key={index} title={title} content={content} />;
  };
  return Object.values(content).map(getFeature);
};
