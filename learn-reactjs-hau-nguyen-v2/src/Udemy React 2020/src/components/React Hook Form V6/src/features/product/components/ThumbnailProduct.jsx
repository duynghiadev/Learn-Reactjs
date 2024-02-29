import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { STATIC_HOST } from '../../../constants/index';
import { THUMBNAIL_PLACEHOLDER } from '../../../constants/common';
import ReactImageMagnify from 'react-image-magnify';

ThumbnailProduct.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  smallImage: {
    paddingTop: theme.spacing(1),
    borderRadius: '4px',
  },
  active: {
    borderColor: theme.palette.primary.main,
  },
}));

function ThumbnailProduct({ product = {} }) {
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const handleClickImg = (e) => {
    const elementImg = e.target;
    if (elementImg.classList.contains('active')) {
      elementImg.classList.remove('active');
    } else {
      elementImg.classList.add('active');
    }
  };
  return (
    <Box>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: `${product.name}`,
            isFluidWidth: true,
            src: `${thumbnailUrl}`,
          },
          largeImage: {
            src: `${thumbnailUrl}`,
            width: 1200,
            height: 1800,
          },
        }}
      />
      <Box className={classes.smallImage && classes.active} onClick={handleClickImg}>
        <img src={thumbnailUrl} alt={product.name} width="20%" />
      </Box>
    </Box>
  );
}

export default ThumbnailProduct;
