
import React from 'react'
import { useSelector } from 'react-redux'
import {CommGroup} from '../../../models-content/CommGroup';
import { State } from '../../../state';
import './comm-groups.css'

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

const CommGroups = () => {
  const commGroupsSelector = (state: State) => state.resources.commGroups;
  const commGroups = useSelector(commGroupsSelector);
  return (
  <div className="comm-groups">
    <div className="title">Community Groups in Lewisham</div>
    <div>
      {commGroups.groups.map(
        getComGroup(commGroups.columns)
      )}
    </div>
  </div>

)};

export default CommGroups;
