import {CommGroups} from '../models-content/CommGroups';
import {Links} from '../models-content/Links';
import {Meetings} from '../models-content/Meetings';
import {PsychHelp} from '../models-content/PsychHelp';
import {SupportLocalBusiness} from '../models-content/SupportLocalBusiness';
import {WorkersRights} from '../models-content/WorkersRights';
import commGroups from '../data/CommGroups.json';
import links from '../data/Links.json';
import meetings from '../data/Meetings.json';
import psychHelp from '../data/PsychHelp.json';
import supportLocalBusiness from '../data/SupportLocalBusiness.json';
import workersRights from '../data/WorkersRights.json';

interface Resources {
  commGroups: {
    columns: string[];
    groups: CommGroups[];
  }
  links: Links[];
  meetings: {
    columns: string[];
    groups: Meetings[];
  }
  psychHelp: {
    columns: string[];
    groups: PsychHelp[];
  }
  supportLocalBusiness: {
    columns: string[];
    groups: SupportLocalBusiness[];
  }
  workersRights: {
    columns: string[];
    groups: WorkersRights[];
  }
}

interface State {
  resources: Resources;
}

export const initialState: State = {
  resources: {
    commGroups,
    links,
    meetings,
    psychHelp,
    supportLocalBusiness,
    workersRights,
  }
};


