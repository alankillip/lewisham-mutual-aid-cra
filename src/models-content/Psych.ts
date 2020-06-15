export type PsychKeys =
  | 'type'
  | 'name'
  | 'phone'
  | 'desc'
  | 'link'
  | 'category';

export interface Psych {
  type: string;
  name: string;
  phone: string;
  desc: string;
  link: string;
  category: string;
}
