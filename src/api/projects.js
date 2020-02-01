import apiClient from './api-client';

function getProjects() {
  return apiClient.request('getProjects');
}

export default {
  getProjects,
};
