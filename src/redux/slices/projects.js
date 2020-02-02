import { createSlice } from '@reduxjs/toolkit';
import { denormalize, normalize } from 'normalizr';
import { useSelector } from 'react-redux';
import api from '../../api';
import { projectsSchema } from '../normalizr';
import { useAsyncAction } from '../utils';
import { getEntities } from './entities';

const projectsInitialState = {
  projectsIds: [],
  selectedProjectId: undefined,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsInitialState,
  reducers: {
    setProjects: (state, { payload: { result } }) => {
      // eslint-disable-next-line no-param-reassign
      state.projectsIds = result;
    },
    setSelectedProject: (state, { payload: { result } }) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedProjectId = result;
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

export function useProject() {
  const { selectedProjectId } = useSelector(selectState);
  const entities = useSelector(getEntities);
  const selectedProject = denormalize(selectedProjectId, projectsSchema, entities);
  return selectedProject;
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

export function fetchProject(projectId) {
  return async (dispatch) => {
    const response = await api.projects.getProject(projectId);
    const normalized = normalize(response, projectsSchema);
    dispatch(
      actions.setSelectedProject({
        ...normalized,
      }),
    );
  };
}

export function useFetchProjects() {
  return useAsyncAction(fetchProjects);
}

export function useFetchProject(projectId) {
  return useAsyncAction(fetchProject, projectId);
}

export default projectsSlice;
