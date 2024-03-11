import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import ProductDetail from '../components/ProductDetail';
import ThumbnailProduct from '../components/ThumbnailProduct';
import useProductDetail from '../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    padding: theme.spacing(1.5),
    width: '400px',
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    padding: theme.spacing(1.5),
    flex: '1 1 0',
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              {loading ? <Box>Loading</Box> : <ThumbnailProduct product={product} />}
            </Grid>
            <Grid item className={classes.right}>
              <ProductDetail product={product} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
