import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

Clock.propTypes = {};

function formatDate(date) {
  if (!date) return '';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      // clean up
      console.log('Clock clean');
      clearInterval(clockInterval);
    };
  }, []);

  return <div style={{ fontSize: '42px' }}>{timeString}</div>;
}

export default Clock;
