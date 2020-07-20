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

interface Type {
  value: string,
  label: string
}

const getTypes = (content: Content[]) => {
  const typeTitleMap: { [key: string]: string } = {
    general: 'General Advice and Guidance',
    tools: 'Mutual Aid Volunteer Tools',
    charity: 'Charity Links:',
  };

  const getTitle = (key: string) => typeTitleMap[key] || key;

  const typeReducer = (result: { [key: string]: boolean }, content: Content) => {
    if (content.type) {
      return ({...result, [content.type as string]: true});
    }
    return result;
  };

  const getTypes = (content: Content[]) => Object.keys(content.reduce(typeReducer, {}));

  const getTypeObject = (type: string) => ({value: type, label: getTitle(type)});

  const getTypeObjects = (content: Content[]) => getTypes(content).map(getTypeObject);

  return getTypeObjects(content);
};

const getResultsDictionary = (results: Content[]): ResultsDictionary => {
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

const Search = () => {

  const [currentCategory, setCurrentCategory] = useState<CategoryType>('All');
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
  const [currentType, setCurrentType] = useState<string>('');
  const allResources = useSelector(allResourcesSelector);
  const [searchResults, setSearchResults] = useState<ResultsDictionary>(getResultsDictionary(allResources));
  const resources = useSelector((state: State) => state.resources);
  const dispatch = useDispatch();

  const search = (s: string) => {
    setCurrentSearchTerm(s);
    let results: Content[] = allResources;
    if (currentSearchTerm.length > 2) {
      dispatch(searchTermAction(s));
      results = searchResources(s, allResources, false);
    } else {
      dispatch(searchTermAction(''));
    }
    setSearchResults(getResultsDictionary(results));
  }

  const clearSearch = () => {
    search('');
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    search(e.currentTarget.value);
  };

  const onTypeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    console.log('onTypeChange');
    setCurrentType(e.currentTarget.value);
  };

  const onCategoryChange = (e: React.FormEvent<HTMLSelectElement>) => {
    console.log('onCategoryChange');
    setCurrentType('');
    setCurrentCategory(e.currentTarget.value as CategoryType);
  };

  const shouldShowResultComponent = (category: CategoryType) => {
    return currentCategory === 'All' || currentCategory === category;
  };

  let types: Type[] = [];
  if (currentCategory !== 'All') {
    types = getTypes(searchResults[currentCategory])
  }

  const filterType = (type: string) => (content: Content) => {
    const result = type === '' || content.type === undefined || content.type === type;
    return result;
  };
  const typeFilter = filterType(currentType);

  const allResults = searchResults.All.filter(typeFilter);
  const currentCategoryResults = (searchResults[currentCategory] as Content[]).filter(typeFilter);
  return (
    <div>
      <div className="search-box">
          <div className="search-box-item">
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
          </div>
          {types.length > 0 &&
          <div className="search-box-item">
            <div>select type :</div>

            <select onChange={onTypeChange}>
              <option value="">ALL</option>
              {types.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>

          </div>
          }
          <div className="search-box-item">
            <div>search :</div>
            <input type="text" onChange={onChange} value={currentSearchTerm}/>
          </div>
        </div>
        {allResults.length !== 0 &&
        <div
          className="results-tally">{currentCategoryResults.length} Result{allResults.length !== 1 ? 's' : ''} :</div>}
      <div>
        {shouldShowResultComponent('CommGroups') && <CommGroupComponent titles={resources.commGroups.columns}
                                                                        commGroups={searchResults.CommGroups.filter(typeFilter)}/>}
        {shouldShowResultComponent('Links') && <LinkComponent links={searchResults.Links.filter(typeFilter)}/>}
        {shouldShowResultComponent('Meetings') &&
        <Meetings titles={resources.meetings.columns} meetings={searchResults.Meetings.filter(typeFilter)}/>}
        {shouldShowResultComponent('PsychHelp') &&
        <PsychHelp titles={resources.psychHelp.columns} psychs={searchResults.PsychHelp.filter(typeFilter)}/>}
        {shouldShowResultComponent('SupportLocalBusiness') &&
        <SupportLocalBusinessesComponent titles={resources.supportLocalBusiness.columns}
                                         supportLocalBus={searchResults.SupportLocalBusiness.filter(typeFilter)}/>}
        {shouldShowResultComponent('WorkersRights') && <WorkersRightsComponent titles={resources.workersRights.columns}
                                                                               workersRights={searchResults.WorkersRights.filter(typeFilter)}/>}
    </div>
    </div>
  )
};

export default Search;
