import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import {State} from "../../state";
import {searchResources} from './utils';
import {Content} from "../../models-content/Content";

const resourcesSelector = (state: State): Content[] => {
  const {resources} = state;
  const {commGroups, links, meetings, psychHelp, supportLocalBusiness, workersRights} = resources;
  return [...commGroups.groups, ...links, ...meetings.groups, ...psychHelp.groups, ...supportLocalBusiness.groups, ...workersRights.groups];
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const resources = useSelector(resourcesSelector);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm: string = e.currentTarget.value;
    setSearchTerm(searchTerm);
    console.log(searchResources(searchTerm, resources, false));
  };
  return (
  <div>
    <div>Search<input type="text" onChange={onChange} /></div>
    <div>{searchTerm}</div>
  </div>
)};

export default Search;
