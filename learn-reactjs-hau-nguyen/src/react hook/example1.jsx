import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function BoxClick(props) {
  const [shape, setShape] = useState('square');
  const [color, setColor] = useState('deeppink');

  function handleBoxClick() {
    setColor('green');
  }

  return (<div
    className='color-box'
    style={{
      backgroundColor: color, width: '50%', height: '50%', margin: '0px',
    }}
    onClick={handleBoxClick}
  >
    Hello
  </div>);
}

BoxClick.propTypes = {};

export default BoxClick;
