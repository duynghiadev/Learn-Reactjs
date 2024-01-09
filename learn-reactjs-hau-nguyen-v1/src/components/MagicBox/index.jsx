import React from 'react';
import useMagicColor from 'hook/useMagicColor';
import './MagicBox.scss';

function MagicBox() {
  const color = useMagicColor();

  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
