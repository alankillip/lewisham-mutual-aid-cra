import {
  Home,
} from './pages';

import {
  GlobalGroups
} from './pages/groups';

import {
  CommGroups,
  Links,
  Meetings,
  PsychHelp,
  SupportLocalBusinesses,
  WorkersRights,
  Wellbeing,
  Search,
} from './pages/resources';

import {RouteItem} from "./models-app/Route";

/*
export const groupsMenu = [
  {path: '/find-a-group/search-locally', component: LocalGroups, label: 'SEARCH LOCALLY'},
  {path: '/find-a-group/search-globally', component: GlobalGroups, label: 'SEARCH GLOBALLY'},
];
*/

export const RESOURCE_MENU_PATH = '/resources/search-resources';

export const resourcesMenu = [
  {path: RESOURCE_MENU_PATH, component: Search, label: 'SEARCH RESOURCES'},
  {path: '/resources/links', component: Links, label: 'LINKS'},
  {path: '/resources/community-groups', component: CommGroups, label: 'COMMUNITY GROUPS'},
  {path: '/resources/workers-rights', component: WorkersRights, label: "WORKER'S RIGHTS"},
  {path: '/resources/support-local-businesses', component: SupportLocalBusinesses, label: "SUPPORT LOCAL BUSINESSES"},
  {path: '/resources/psychological-help', component: PsychHelp, label: "PSYCHOLOGICAL HELP"},
  {path: '/resources/wellbeing', component: Wellbeing, label: "WELL BEING"},
  {path: '/resources/meetings', component: Meetings, label: "MEETINGS"},
];

export const menu: RouteItem[] = [
  {path: '/', component: Home, label: 'HOME'},
  {component: GlobalGroups, path: '/find-a-group', label: 'FIND A GROUP'},
  {label: 'RESOURCES', routes: resourcesMenu, component: () => null},
];
