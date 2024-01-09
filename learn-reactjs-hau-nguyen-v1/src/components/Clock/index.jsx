import React from 'react';
import useClock from 'hook/useClock';

function Clock(props) {
  const { timeString } = useClock();

  return <div style={{ fontSize: '42px' }}>{timeString}</div>;
}

export default Clock;
