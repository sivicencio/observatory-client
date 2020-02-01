import { List, Spin } from 'antd';
import React from 'react';
import { useAsync } from '../../hooks';
import {
  useFetchProjects,
  useProjects,
} from '../../redux/slices/projects';


export default function ProjectsList() {
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
          <div>
            {item.uid}
            {item.name}
            , duration
            {item.duration}
            {item.state}
          </div>
        </List.Item>
      )}
    />
  );
}
