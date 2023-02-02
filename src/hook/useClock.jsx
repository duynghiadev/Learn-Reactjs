import { useState, useEffect } from 'react';

function formatDate(date) {
  if (!date) return '';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const useClockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    // This is process Unmount
    return () => {
      // clean up
      console.log('useClock clean');
      clearInterval(useClockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
