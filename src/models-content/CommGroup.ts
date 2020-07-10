export type CommGroupKeys =
  | 'category'
  | 'name'
  | 'basedIn'
  | 'whatDoYouDo'
  | 'support'
  | 'contactFromOrg'
  | 'repName'
  | 'repContact'
  | 'link'
  | 'category';


export interface CommGroup {
     name: string;
     basedIn: string;
     whatDoYouDo: string;
     support: string;
     contactFromOrg: string;
     repName: string;
     repContact: string;
     link: string;
     otherInfo: string;
     category: string;
     type?: string;
}
