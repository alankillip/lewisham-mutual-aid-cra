import React from "react"
import {Meeting} from '../models-content/Meeting'
import {getFeatures} from './utils'
import './content-card.css'

const MeetingsComponent = (props: MeetingsProps) => {
  const {meetings, titles} = props;
  return (
    <div>
      {meetings.map(
        (commGroup: Meeting, index: number) => (
          <div key={index} className="content-card">
            <div className="content-card-title">
              <strong>{commGroup.date}</strong>
            </div>
            {getFeatures(titles, commGroup)}
          </div>
      ))}
    </div>)
};

interface MeetingsProps {
  meetings: Meeting[];
  titles: string[];
}

export default MeetingsComponent;
