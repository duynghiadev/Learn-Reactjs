import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import FilterByCategory from './FilterByCategory';
import { Skeleton } from '@material-ui/lab';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};

FilterSkeleton.defaultProps = {
  length: 6,
};

function FilterSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid container spacing={8}>
            <Grid item xs>
              <Skeleton />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FilterSkeleton;
