import {
  Home,
  FindAGroup,
  Resources,
  Search,
} from './pages';

export const menu = [
  {path: '/', component: Home, label: 'HOME'},
  {path: '/find-a-group', component: FindAGroup, label: 'FIND A GROUP'},
  {path: '/resources', component: Resources, label: 'RESOUCES'},
  {path: '/search', component: Search, label: 'SEARCH'}
];
