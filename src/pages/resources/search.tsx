import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {State} from '../../state';
import {searchResources} from './utils'
import {Content, CategoryType} from '../../models-content/Content'
import CommGroupComponent from '../../components/comm-group-component'
import LinkComponent from '../../components/link-component'
import Meetings from '../../components/meetings-component'
import PsychHelp from '../../components/psych-help-component'
import SupportLocalBusinessesComponent from '../../components/support-local-businesses-component'
import WorkersRightsComponent from '../../components/workers-rights-component'
import {CommGroup} from "../../models-content/CommGroup";
import {Link} from "../../models-content/Link";
import {Meeting} from "../../models-content/Meeting";
import {Psych} from "../../models-content/Psych";
import {SupportLocalBus} from "../../models-content/SupportLocalBus";
import {WorkersRight} from "../../models-content/WorkersRight";
import {useDispatch} from "react-redux";
import {searchTermAction} from '../../actions';
import './resource-page.css'
import './search.css'

const allResourcesSelector = (state: State): Content[] => {
  const {resources} = state;
  const {commGroups, links, meetings, psychHelp, supportLocalBusiness, workersRights} = resources;
  return [...commGroups.groups, ...links, ...meetings.groups, ...psychHelp.groups, ...supportLocalBusiness.groups, ...workersRights.groups];
};

const Search = () => {
  const [searchResults, setSearchResults] = useState<Content[]>([]);
  const allResources = useSelector(allResourcesSelector);
  const resources = useSelector((state: State) => state.resources);
  const dispatch = useDispatch();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchTerm: string = e.currentTarget.value;
    let results: Content[]  = [];
    if (searchTerm.length > 2) {
      dispatch(searchTermAction(searchTerm));
      results = searchResources(searchTerm, allResources, false);
    }
    setSearchResults(results);
  };

  const filterResults = (category: CategoryType) => searchResults.filter((content: Content) => content.category === category);
  const commGroupResults = filterResults('CommGroups') as CommGroup[];
  const linkResults = filterResults('Links') as Link[];
  const meetingsResults = filterResults('Meetings') as Meeting[];
  const psychResults = filterResults('PsychHelp') as Psych[];
  const supportLocalBusinessesResults = filterResults('SupportLocalBusiness') as SupportLocalBus[];
  const workersRightsResults = filterResults('WorkersRights') as WorkersRight[];
  return (
    <div className="resource-page">
      <div className="search-box">
        <div>search resources :</div>
        <input type="text" onChange={onChange}/></div>
      {searchResults.length !== 0 && <div className="results-tally">{searchResults.length} Result{searchResults.length !== 1 ? 's': ''} :</div>}
      <div>
        <CommGroupComponent titles={resources.commGroups.columns} commGroups={commGroupResults}/>
        <LinkComponent links={linkResults}/>
        <Meetings titles={resources.meetings.columns} meetings={meetingsResults}/>
        <PsychHelp titles={resources.psychHelp.columns} psychs={psychResults}/>
        <SupportLocalBusinessesComponent titles={resources.supportLocalBusiness.columns}
                                         supportLocalBus={supportLocalBusinessesResults}/>
        <WorkersRightsComponent titles={resources.workersRights.columns} workersRights={workersRightsResults}/>
      </div>
    </div>
  )
};

export default Search;
