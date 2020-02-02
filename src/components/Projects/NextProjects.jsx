import React, { useCallback, useState } from 'react';
import { Input } from 'antd';
import { createUseStyles } from 'react-jss';
import { useFetchNextProjects } from '../../redux/slices/projects';
import ProjectsList from './List';

const { Search } = Input;

const useStyles = createUseStyles({
  search: {
    paddingBottom: '20px',
  },
});

export default function NextProjects() {
  const [number, setNumber] = useState(0);
  const classes = useStyles();

  const onSubmit = useCallback((value) => {
    // eslint-disable-next-line radix
    setNumber(Number.parseInt(value));
  }, [setNumber]);

  return (
    <div>
      <Search
        className={classes.search}
        placeholder="Number of next projects"
        onSearch={onSubmit}
        enterButton
      />
      <ProjectsList useFetch={useFetchNextProjects} numProjects={number} />
    </div>
  );
}
