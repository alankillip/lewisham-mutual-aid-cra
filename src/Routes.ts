import {
  Home,
  FindAGroup,
  Search,
} from './pages';

import {
  CommGroups,
  Links,
  Meetings,
  PsychHelp,
  SupportLocalBusinesses,
  WorkersRights,
} from './pages/resources/';
import {RouteItem} from "./models-app/Route";

export const resourcesMenu = [
  {path: '/resources/links', component: Links, label: 'LINKS'},
  {path: '/resources/community-groups', component: CommGroups, label: 'COMMUNITY GROUPS'},
  {path: '/resources/workers-rights', component: WorkersRights, label: "WORKER'S RIGHTS"},
  {path: '/resources/support-local-businesses', component: SupportLocalBusinesses, label: "SUPPORT LOCAL BUSINESSES"},
  {path: '/resources/psychological-help', component: PsychHelp, label: "PSYCHOLOGICAL HELP"},
  {path: '/resources/meetings', component: Meetings, label: "MEETINGS"},
];

export const menu: RouteItem[] = [
  {path: '/', component: Home, label: 'HOME'},
  {label: 'RESOURCES', routes: resourcesMenu, component: () => null},
  {path: '/search', component: Search, label: 'SEARCH'},
  {path: '/find-a-group', component: FindAGroup, label: 'GROUPS'},
];


