import {CommGroup} from '../models-content/CommGroup';
import {Link} from '../models-content/Link';
import {Meeting} from '../models-content/Meeting';
import {Psych} from '../models-content/Psych';
import {SupportLocalBus} from '../models-content/SupportLocalBus';
import {WorkersRight} from '../models-content/WorkersRight';
import commGroups from '../data/CommGroups.json';
import links from '../data/Links.json';
import meetings from '../data/Meetings.json';
import psychHelp from '../data/PsychHelp.json';
import supportLocalBusiness from '../data/SupportLocalBusiness.json';
import workersRights from '../data/WorkersRights.json';

interface Resources {
  commGroups: {
    columns: string[];
    groups: CommGroup[];
  }
  links: Link[];
  meetings: {
    columns: string[];
    groups: Meeting[];
  }
  psychHelp: {
    columns: string[];
    groups: Psych[];
  }
  supportLocalBusiness: {
    columns: string[];
    groups: SupportLocalBus[];
  }
  workersRights: {
    columns: string[];
    groups: WorkersRight[];
  }
}

export interface State {
  resources: Resources;
  searchTerm: string;
}

export const initialState: State = {
  searchTerm: '',
  resources: {
    commGroups,
    links,
    meetings,
    psychHelp,
    supportLocalBusiness,
    workersRights,
  }
};


