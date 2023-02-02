import React from 'react';
import PropTypes from 'prop-types';
import useClock from 'hook/useClock';

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();

  return <div style={{ fontSize: '42px' }}>{timeString}</div>;
}

export default Clock;
