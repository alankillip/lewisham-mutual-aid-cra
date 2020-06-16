import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import PsychHelpComponent from '../../components/psych-help-component';
import './resource-page.css'

const PsychHelp = () => {
  const psychHelpSelector = (state: State) => state.resources.psychHelp;
  const psychs = useSelector(psychHelpSelector);
  const {groups, columns} = psychs;
  return (
    <div className="resource-page">
      <div className="title">Advice & Support for Psychological Difficulties - compiled by Simon Docking</div>
      <PsychHelpComponent psychs={groups} titles={columns} />
    </div>
  )};

export default PsychHelp;
