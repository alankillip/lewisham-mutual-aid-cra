import React from "react"
import {Content} from "../models-content/Content"
import {
  Link,
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
        return Link(title, content);
      case 'contactFromOrg':
        if (content.indexOf('https://chat.whatsapp.com/') === 0) {
          return <WhatsAppLink title={title} content={content} />;
        }
        if (content.indexOf('https://') === 0) {
          return Link(title, content);
        }
    }
    return Feature(title, content);
  };
  return Object.values(content).map(getFeature);
};
