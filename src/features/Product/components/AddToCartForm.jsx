import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/QuantityField';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" style={{ width: '250px' }} size="large">
        Add To Cart
      </Button>
    </form>
  );
}

export default AddToCartForm;
