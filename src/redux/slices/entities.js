import merge from 'lodash/merge';
import { createSelector } from '@reduxjs/toolkit';

const entitiesSliceName = 'entities';

function entitiesReducer(state = {}, { payload }) {
  if (!payload || !payload.entities) return state;

  return merge({}, state, payload.entities);
}

const selectState = (state) => state[entitiesSliceName];

export const getEntities = createSelector(selectState, (entities) => entities);

export default {
  reducer: entitiesReducer,
  name: entitiesSliceName,
};
