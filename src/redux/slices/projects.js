import { createSlice } from '@reduxjs/toolkit';
import { denormalize, normalize } from 'normalizr';
import { useSelector } from 'react-redux';
import api from '../../api';
import { projectsSchema } from '../normalizr';
import { useAsyncAction } from '../utils';
import { getEntities } from './entities';

const projectsInitialState = {
  projectsIds: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsInitialState,
  reducers: {
    setProjects: (state, { payload: { result } }) => {
      // eslint-disable-next-line no-param-reassign
      state.projectsIds = result;
    },
  },
});

const { actions } = projectsSlice;

const selectState = (state) => state[projectsSlice.name];

export function useProjects() {
  const { projectsIds } = useSelector(selectState);
  const entities = useSelector(getEntities);
  const projects = denormalize(projectsIds, [projectsSchema], entities);
  return projects;
}

export function fetchProjects() {
  return async (dispatch) => {
    const response = await api.projects.getProjects();
    const normalized = normalize(response, [projectsSchema]);
    dispatch(
      actions.setProjects({
        ...normalized,
      }),
    );
  };
}

export function useFetchProjects() {
  return useAsyncAction(fetchProjects);
}

export default projectsSlice;
