import React from "react"
import {CommGroup} from '../models-content/CommGroup'
import {getFeatures} from './utils'
import './content-card.css'

const CommGroupComponent = (props: CommGroupProps) => {
  const {commGroups, titles} = props;
  return (
    <div>
      {commGroups.map(
        (commGroup: CommGroup, index: number) => (
          <div key={index} className="content-card">
            <div className="content-card-title">
              <strong>{commGroup.name}</strong>
            </div>
            {getFeatures(titles, commGroup)}
          </div>
      ))}
    </div>)
};

interface CommGroupProps {
  commGroups: CommGroup[];
  titles: string[];
}

export default CommGroupComponent;
