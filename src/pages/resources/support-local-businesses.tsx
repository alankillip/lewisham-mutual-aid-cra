import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import SupportLocalBusinessesComponent from '../../components/support-local-businesses-component';

const CommGroups = () => {
  const supportLocalBusSelector = (state: State) => state.resources.supportLocalBusiness;
  const supportLocalBus = useSelector(supportLocalBusSelector);
  const {groups, columns} = supportLocalBus;
  return (
    <div className="resource-page">
      <div className="title">Local Organisation Requiring Help</div>
      <SupportLocalBusinessesComponent supportLocalBus={groups} titles={columns} />
    </div>
  )};

export default CommGroups;
