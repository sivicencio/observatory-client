import { Avatar, List, Spin } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useAsync } from '../../hooks';
import {
  useFetchProjects,
  useProjects,
} from '../../redux/slices/projects';
import Status from './Status';

const useStyles = createUseStyles({
  title: {
    paddingRight: '10px',
  },
});


export default function ProjectsList() {
  const classes = useStyles();
  const { pending: loading } = useAsync(
    useFetchProjects(),
  );
  const projects = useProjects();

  if (loading) return <Spin size="large" />;

  return (
    <List
      bordered
      dataSource={projects}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon="right" />}
            title={(
              <>
                <Link to={`/projects/${item.uid}`} className={classes.title}>
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  [{item.uid}] {item.name}
                </Link>
                <Status status={item.state} />
              </>
            )}
            description={`Duration: ${item.duration}`}
          />
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          <span>Rank: {item.rank}</span>
        </List.Item>
      )}
    />
  );
}
