import React from "react"
import {WorkersRight} from '../models-content/WorkersRight'
import {getFeatures} from './utils'
import './content-card.css'

const WorkersRightComponent = (props: WorkersRightProps) => {
  const {workersRights, titles} = props;
  return (
    <div>
      {workersRights.map(
        (workersRight: WorkersRight, index: number) => (
          <div key={index} className="content-card">
            <div className="content-card-title">
              <strong>{workersRight.name}</strong>
            </div>
            {getFeatures(titles, workersRight)}
          </div>
      ))}
    </div>)
};

interface WorkersRightProps {
  workersRights: WorkersRight[];
  titles: string[];
}

export default WorkersRightComponent;
