import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

CategorySkeletonList.propTypes = {
  length: PropTypes.number,
};

CategorySkeletonList.defaultProps = {
  length: 6,
};

function CategorySkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index}>
            <Box paddingTop={1}>
              <Skeleton variant="text" width={200} height={20} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategorySkeletonList;
