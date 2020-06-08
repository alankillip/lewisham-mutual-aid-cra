import {CommGroup} from '../../../models-content/CommGroup';
import './comm-groups.css'
import React from "react";

const feature = (title: string, content: string) => (
  <div key={`${title} ${content}`}><div className="feature-name">{`${title} : `}</div><div className="comm-group-content">{content}</div></div>
);

const getFeatures = (titles: string[], commGroup: CommGroup) => {
  const getFeature = (content: string, index: number) => {
    if (index > 1 && content !== '') {
      return feature(titles[index - 1], content)
    }
    return null;
  }
  return Object.values(commGroup).map(getFeature);
};

const getComGroup = (columns: string[]) => (commGroup: CommGroup, index: number) => (
  <div key={index} className="comm-group">
    <div className="comm-group-title"><strong>{commGroup.name}</strong></div>
    {getFeatures(columns, commGroup)}
  </div>
);

const CommGroupComponent = (props: Props) => {
  const {commGroups, titles} = props;
  return (
  <div>
    {commGroups.map(
      getComGroup(titles)
    )}
  </div>)
};

interface Props {
  commGroups: CommGroup[];
  titles: string[];
}

export default CommGroupComponent;
