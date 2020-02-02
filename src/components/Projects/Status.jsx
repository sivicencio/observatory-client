import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const COLORS = {
  READY: 'green',
};

function Status({ status }) {
  return (
    <Tag color={COLORS[status]}>{status}</Tag>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
