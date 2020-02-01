import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Layout } from 'antd';
import { useToggle } from '../../hooks';
import Header from './Header';
import Sidebar from './Sidebar';

const { Content } = Layout;

const useStyles = createUseStyles({
  outer: {
    minHeight: '100vh',
  },
  content: {
    margin: '24px 16px',
    background: '#fff',
    padding: 24,
    minHeight: 280,
  },
});

export default function AppLayout({ children }) {
  const classes = useStyles();

  const [collapsed, toggleCollapsed] = useToggle(false);

  return (
    <Layout className={classes.outer}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} handleToggleCollapsed={toggleCollapsed} />
        <Content className={classes.content}>{children}</Content>
      </Layout>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
