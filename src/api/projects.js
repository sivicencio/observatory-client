import apiClient from './api-client';

function getProjects() {
  return apiClient.request('getProjects');
}

function getProject(projectId) {
  return apiClient.request('getProject', [projectId]);
}

export default {
  getProjects,
  getProject,
};
