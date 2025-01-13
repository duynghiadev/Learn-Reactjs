import React from 'react';
import useClock from 'hook/useClock';
import './BetterClock.scss';

function BetterClock(props) {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
