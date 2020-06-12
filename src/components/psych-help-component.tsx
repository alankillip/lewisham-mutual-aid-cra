import React from "react"
import {Psych} from '../models-content/Psych'
import {getFeatures} from './utils'
import './content-card.css'

const PsychHelpComponent = (props: PsychProps) => {
  const {psychs, titles} = props;
  return (
    <div>
      {psychs.map(
        (psych: Psych, index: number) => (
          <div key={index} className="content-card">
            <div className="content-card-title">
              <strong>{psych.name}</strong>
            </div>
            {getFeatures(titles, psych)}
          </div>
      ))}
    </div>)
};

interface PsychProps {
  psychs: Psych[];
  titles: string[];
}

export default PsychHelpComponent;
