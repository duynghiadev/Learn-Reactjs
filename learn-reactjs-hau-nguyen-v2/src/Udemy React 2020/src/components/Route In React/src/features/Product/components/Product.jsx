import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants'

const Product = ({ product }) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`

  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width='100%' />
      </Box>

      <Typography variant='body2'>{product.name}</Typography>
      <Typography variant='body2'>
        {product.salePrice} -{product.promotionPercent}
      </Typography>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product
