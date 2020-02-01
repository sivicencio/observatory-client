import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Icon, Layout } from 'antd';

const { Header } = Layout;

const useStyles = createUseStyles({
  header: {
    background: '#fff',
    display: 'flex',
    padding: '0 16px',
    justifyContent: 'space-between',
  },
  userName: {
    marginRight: '10px',
  },
  trigger: {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '& :hover': {
      color: '#1890ff',
    },
  },
});

export default function AppHeader({ collapsed, handleToggleCollapsed }) {
  const classes = useStyles();

  return (
    <Header className={classes.header}>
      <Icon
        className={classes.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={handleToggleCollapsed}
      />
    </Header>
  );
}

AppHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  handleToggleCollapsed: PropTypes.func.isRequired,
};
