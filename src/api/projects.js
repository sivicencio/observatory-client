import apiClient from './api-client';

function getProjects() {
  return apiClient.request('getProjects');
}

function getNextProjects(numProjects) {
  return apiClient.request('getNextProjects', [numProjects]);
}

function getProject(projectId) {
  return apiClient.request('getProject', [projectId]);
}

export default {
  getProjects,
  getProject,
  getNextProjects,
};
