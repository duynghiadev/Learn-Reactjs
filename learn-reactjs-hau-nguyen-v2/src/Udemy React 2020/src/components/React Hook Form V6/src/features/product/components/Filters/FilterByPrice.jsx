import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { BorderTop } from '@material-ui/icons';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    '& > span': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const HandleSubmit = () => {
    if (onChange && Number.parseInt(values.salePrice_lte) > 0) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handlePriceChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handlePriceChange} />
      </Box>
      <Button variant="outlined" color="primary" size="small" onClick={HandleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
