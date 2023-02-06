import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

InputField.propTypes = {};

function InputField(props) {
  return (
    <div>
      <TextField fullWidth />
    </div>
  );
}

export default InputField;
