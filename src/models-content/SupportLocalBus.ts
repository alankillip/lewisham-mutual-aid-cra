export type SupportLocalBusKeys =
  | 'name'
  | 'details'
  | 'howYouCanHelp'
  | 'links'
  | 'category';

export interface SupportLocalBus {
  name: string;
  details: string;
  howYouCanHelp: string;
  links: string;
  category: string;
}
