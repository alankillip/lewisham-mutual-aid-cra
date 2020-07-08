import {CommGroup, CommGroupKeys} from './CommGroup';
import {Link, LinkKeys} from './Link';
import {Meeting, MeetingKeys} from './Meeting';
import {Psych, PsychKeys} from './Psych';
import {SupportLocalBus, SupportLocalBusKeys} from './SupportLocalBus';
import {WorkersRight, WorkersRightKeys} from './WorkersRight';

export type CategoryType =
| 'All'
| 'CommGroups'
| 'Links'
| 'Meetings'
| 'PsychHelp'
| 'SupportLocalBusiness'
| 'WorkersRights';

export type ContentKeys =
  & CommGroupKeys
  & LinkKeys
  & MeetingKeys
  & PsychKeys
  & SupportLocalBusKeys
  & WorkersRightKeys;

export type Content =
  | CommGroup
  | Link
  | Meeting
  | Psych
  | SupportLocalBus
  | WorkersRight;

