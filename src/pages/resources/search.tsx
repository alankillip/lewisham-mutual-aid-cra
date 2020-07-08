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

interface ResultsDictionary {
  All: Content[],
  CommGroups: CommGroup[],
  Links: Link[],
  Meetings: Meeting[],
  PsychHelp: Psych[],
  SupportLocalBusiness: SupportLocalBus[],
  WorkersRights: WorkersRight[],
};

const allResourcesSelector = (state: State): Content[] => {
  const {resources} = state;
  const {commGroups, links, meetings, psychHelp, supportLocalBusiness, workersRights} = resources;
  return [...commGroups.groups, ...links, ...meetings.groups, ...psychHelp.groups, ...supportLocalBusiness.groups, ...workersRights.groups];
};

const getResultsDictionary = (results: Content[]): ResultsDictionary  => {
  const filterResults = (category: CategoryType) => results.filter((content: Content) => content.category === category);
  return {
    All: results,
    CommGroups: filterResults('CommGroups') as CommGroup[],
    Links: filterResults('Links') as Link[],
    Meetings: filterResults('Meetings') as Meeting[],
    PsychHelp: filterResults('PsychHelp') as Psych[],
    SupportLocalBusiness: filterResults('SupportLocalBusiness') as SupportLocalBus[],
    WorkersRights: filterResults('WorkersRights') as WorkersRight[],
  };
};

const typeReducer = () => {

}

const Search = () => {

  const [currentCategory, setCurrentCategory] = useState<CategoryType>('All');
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
  const allResources = useSelector(allResourcesSelector);
  const [searchResults, setSearchResults] = useState<ResultsDictionary>(getResultsDictionary(allResources));
  const resources = useSelector((state: State) => state.resources);
  const dispatch = useDispatch();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentSearchTerm(e.currentTarget.value);
    let results: Content[]  = [];
    if (currentSearchTerm.length > 2) {
      dispatch(searchTermAction(currentSearchTerm));
      results = searchResources(currentSearchTerm, allResources, false);
    }
    setSearchResults(getResultsDictionary(results));
  };

  const onCategoryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.currentTarget.value as CategoryType);
  };

  const shouldShowResultComponent = (category: CategoryType) => {
    return currentCategory === 'All' || currentCategory === category;
  };

  return (
    <div className="resource-page">
      <div className="search-box">
        <div>select category :</div>
        {<select onChange={onCategoryChange}>
          <option value="All">ALL</option>
          <option value="CommGroups">Community Groups</option>
          <option value="Links">Links</option>
          <option value="Meetings">Meetings</option>
          <option value="PsychHelp">Psychological Help</option>
          <option value="SupportLocalBusiness">Support Local Businesses</option>
          <option value="WorkersRights">Worker's Rights</option>
        </select>}
        <div>search :</div>
        <input type="text" onChange={onChange}/>
      </div>
      {searchResults.All.length !== 0 && <div className="results-tally">{(searchResults[currentCategory] as Content[]).length} Result{searchResults.All.length !== 1 ? 's': ''} :</div>}
      <div>
        {shouldShowResultComponent('CommGroups') && <CommGroupComponent titles={resources.commGroups.columns} commGroups={searchResults.CommGroups}/>}
        {shouldShowResultComponent('Links') && <LinkComponent links={searchResults.Links}/>}
        {shouldShowResultComponent('Meetings') && <Meetings titles={resources.meetings.columns} meetings={searchResults.Meetings}/>}
        {shouldShowResultComponent('PsychHelp') && <PsychHelp titles={resources.psychHelp.columns} psychs={searchResults.PsychHelp}/>}
        {shouldShowResultComponent('SupportLocalBusiness') && <SupportLocalBusinessesComponent titles={resources.supportLocalBusiness.columns}
                                         supportLocalBus={searchResults.SupportLocalBusiness}/>}
        {shouldShowResultComponent('WorkersRights') && <WorkersRightsComponent titles={resources.workersRights.columns} workersRights={searchResults.WorkersRights}/>}
      </div>
    </div>
  )
};

export default Search;
