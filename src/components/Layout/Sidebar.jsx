import {
  Icon,
  Layout,
  Menu,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import MenuLink from './MenuLink';

const { SubMenu } = Menu;
const { Sider } = Layout;

const WIDTH = 220;

const useStyles = createUseStyles({
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px',
  },
});

function SideBar({ collapsed }) {
  const classes = useStyles();
  const { pathname } = useLocation();

  const defaultOpenKeys = pathname.substring(1).split('/');
  defaultOpenKeys[0] = `/${defaultOpenKeys[0]}`;
  return (
    <Sider trigger={null} width={WIDTH} collapsible collapsed={collapsed}>
      <div className={classes.logo} />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={defaultOpenKeys}
      >
        <Menu.Item key="/">
          <MenuLink
            route="/"
            title="Home"
            icon="home"
          />
        </Menu.Item>
        <SubMenu
          key="/projects"
          title={(
            <span>
              <Icon type="experiment" />
              <span>Projects</span>
            </span>
          )}
        >
          <Menu.Item key="/projects">
            <MenuLink
              route="/projects"
              title="Projects List"
              icon="unordered-list"
            />
          </Menu.Item>
          <Menu.Item key="/next-projects">
            <MenuLink
              route="/next-projects"
              title="Next Projects"
              icon="clock-circle"
            />
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <MenuLink route="" title="Telescope" icon="funnel-plot" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SideBar;
