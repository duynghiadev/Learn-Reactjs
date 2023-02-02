import { useEffect, useRef } from 'react';
import { useState } from 'react';

function randomColor(currentColor) {
  const COLOR_LIST = ['red', 'green', 'yellow'];
  // random 0 -> 2
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');

  // Change color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log('First color: ', color);
      console.log('Change color: ', colorRef.current);

      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    // Clean up
    return () => {
      clearInterval(colorInterval);
    };
  }, [color]);

  return color;
}

export default useMagicColor;
