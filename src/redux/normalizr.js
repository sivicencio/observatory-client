import { schema } from 'normalizr';

export const projectsSchema = new schema.Entity(
  'projects',
  {},
  { idAttribute: 'uid' },
);

export default projectsSchema;
