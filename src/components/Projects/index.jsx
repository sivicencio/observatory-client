import React from 'react';
import { useFetchProjects } from '../../redux/slices/projects';
import ProjectsList from './List';

export default function Projects() {
  return (
    <ProjectsList useFetch={useFetchProjects} />
  );
}
