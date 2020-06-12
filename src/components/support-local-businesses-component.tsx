import React from "react"
import {SupportLocalBus} from '../models-content/SupportLocalBus'
import {getFeatures} from './utils'
import './content-card.css'

const SupportLocalBusinessesComponent = (props: SupportLocalBusinessesProps) => {
  const {supportLocalBus, titles} = props;
  return (
    <div>
      {supportLocalBus.map(
        (supportLocalBus: SupportLocalBus, index: number) => (
          <div key={index} className="content-card">
            <div className="content-card-title">
              <strong>{supportLocalBus.name}</strong>
            </div>
            {getFeatures(titles, supportLocalBus)}
          </div>
      ))}
    </div>)
};

interface SupportLocalBusinessesProps {
  supportLocalBus: SupportLocalBus[];
  titles: string[];
}

export default SupportLocalBusinessesComponent;
