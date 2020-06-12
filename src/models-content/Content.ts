import {CommGroup} from './CommGroup';
import {Link} from './Link';
import {Meeting} from './Meeting';
import {Psych} from './Psych';
import {SupportLocalBus} from './SupportLocalBus';
import {WorkersRight} from './WorkersRight';

export type Content =
  | CommGroup
  | Link
  | Meeting
  | Psych
  | SupportLocalBus
  | WorkersRight;
