import React from 'react';
import PropTypes from 'prop-types';
import useClock from 'hook/useClock';
import './BetterClock.scss';

BetterClock.propTypes = {};

function BetterClock(props) {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
