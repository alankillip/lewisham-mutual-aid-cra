export type LinkKeys =
  | 'name'
  | 'link'
  | 'type'
  | 'category';

export interface Link {
  name: string;
  link: string;
  type: string;
  category: string;
}
