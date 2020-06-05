import {
  Home,
  FindAGroup,
  Resources,
  Search,
} from './pages';

export const menu = [
  {path: '/', component: Home, label: 'Home'},
  {path: '/find-a-group', component: FindAGroup, label: 'Find a Group'},
  {path: '/resources', component: Resources, label: 'Resources'},
  {path: '/search', component: Search, label: 'Search'}
];
