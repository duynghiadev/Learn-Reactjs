import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from 'hook/useMagicColor';
import './MagicBox.scss';

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagicColor();

  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
