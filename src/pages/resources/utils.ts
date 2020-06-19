import {Content, ContentKeys} from "../../models-content/Content";

const searchReducer = (searchTerm: string) => (result: boolean, text: string): boolean => {
  // false || true = true;
  // true || false = true;
  // false || false = false;
  if (text.indexOf(searchTerm) > -1) {
    return result || true;
  }
  return result;
};

const searchResourceReducer = (searchTerm: string, caseSensitive: boolean, fieldsToSearch: ContentKeys[] | null) => (results: Content[], resource: Content) => {
  // Search all fields by default
  let fields: ContentKeys[] = fieldsToSearch ? fieldsToSearch : Object.keys(resource) as ContentKeys[];
  if (resource.category === 'Links') {
    // @ts-ignore
    fields = ['name', 'type'];
  }
  const searchReducerFunction = caseSensitive ? searchReducer(searchTerm) : searchReducer(searchTerm.toLowerCase());
  const fieldsMapper = (field: ContentKeys) => caseSensitive ? resource[field] : resource[field].toLowerCase();
  const values: string[] = fields.map(fieldsMapper);
  if (values.reduce(searchReducerFunction, false)) {
    return results.concat(resource);
  }
  return results
};

export const searchResources = (searchTerm: string, resources: Content[], caseSensitive: boolean, fieldsToSearch: ContentKeys[] | null = null): Content[] => {
  const searchFunction = searchResourceReducer(searchTerm, caseSensitive, fieldsToSearch);
  return resources.reduce(searchFunction, [])
};
