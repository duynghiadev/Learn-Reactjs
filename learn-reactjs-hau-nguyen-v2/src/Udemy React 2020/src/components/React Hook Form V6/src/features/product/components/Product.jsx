import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER } from '../../../constants/common';
import { STATIC_HOST } from '../../../constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import formatPrice from '../../../utils/common';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontWeight="bold" fontSize="16px" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
