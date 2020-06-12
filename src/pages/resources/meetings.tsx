import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../state';
import MeetingsComponent from '../../components/meetings-component';
import './comm-groups.css';

const Meetings = () => {
  const commGroupsSelector = (state: State) => state.resources.meetings;
  const commGroups = useSelector(commGroupsSelector);
  const {groups, columns} = commGroups;
  return (
    <div className="comm-groups">
      <div className="title">Meetings, past and present.</div>
      <MeetingsComponent meetings={groups} titles={columns} />
    </div>
  )};

export default Meetings;
