import { List, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import api from '../../api';

export default function ProjectsList() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.projects.getProjects()
      .then((response) => {
        setProjects(response);
        setLoading(false);
      });
  }, [setLoading, setProjects]);

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
