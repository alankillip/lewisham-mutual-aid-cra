export type MeetingKeys =
  | 'date'
  | 'agenda'
  | 'minutes'
  | 'linkToJoin'
  | 'chair'
  | 'summary'
  | 'category';


export interface Meeting {
  date: string;
  agenda: string;
  minutes: string;
  linkToJoin: string;
  chair: string;
  summary: string;
  category: string;
}
