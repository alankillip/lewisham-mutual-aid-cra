import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import WorkersRightComponent from '../../components/workers-rights-component';
import './resource-page.css'

const CommGroups = () => {
  const workersRightsSelector = (state: State) => state.resources.workersRights;
  const workersRights = useSelector(workersRightsSelector);
  const {groups, columns} = workersRights;
  return (
    <div className="resource-page">
      <div className="resource-page-title">Organisations providing good advice/assistance to people on accessing their rights and/or key services. For instance around housing, work etc... </div>
      <WorkersRightComponent workersRights={groups} titles={columns} />
    </div>
  )};

export default CommGroups;
