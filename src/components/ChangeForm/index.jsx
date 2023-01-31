import React, { useState } from 'react';
import PropTypes from 'prop-types';

ChangeForm.propTypes = {
  onSubmit: PropTypes.func,
};

ChangeForm.defaultProps = {
  onSubmit: null,
};

function ChangeForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);

    // Reset form
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange} />
    </form>
  );
}

export default ChangeForm;
