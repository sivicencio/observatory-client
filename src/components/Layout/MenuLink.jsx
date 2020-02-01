import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

function MenuLink({ route, title, icon }) {
  return (
    <Link to={route}>
      <Icon type={icon} />
      <span>{title}</span>
    </Link>
  );
}

MenuLink.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default MenuLink;
