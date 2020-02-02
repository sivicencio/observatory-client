import { PageHeader, Spin } from 'antd';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useAsync } from '../../hooks';
import {
  useFetchProject,
  useProject,
} from '../../redux/slices/projects';
import Status from './Status';

const useStyles = createUseStyles({
  pageHeader: {
    border: '1px solid rgb(235, 237, 240)',
  },
});


export default function Project() {
  const { projectId } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const { pending: loading } = useAsync(
    useFetchProject(projectId),
  );
  const project = useProject(projectId);

  if (loading) return <Spin size="large" />;

  return (
    <PageHeader
      className={classes.pageHeader}
      onBack={history.goBack}
      title={project.name}
      subTitle={<Status status={project.state} />}
    >
      <h3>{`Rank: ${project.rank}`}</h3>
      <span>{`Duration: ${project.duration}`}</span>
    </PageHeader>
  );
}
