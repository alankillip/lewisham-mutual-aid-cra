import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import CommGroupComponent from '../../components/comm-group-component';
import './comm-groups.css';

const CommGroups = () => {
  const commGroupsSelector = (state: State) => state.resources.commGroups;
  const commGroups = useSelector(commGroupsSelector);
  const {groups, columns} = commGroups;
  return (
  <div className="comm-groups">
    <div className="title">Community Groups in Lewisham</div>
      <CommGroupComponent commGroups={groups} titles={columns} />
  </div>
)};

export default CommGroups;
