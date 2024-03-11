import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants'

const ProductThumbnail = ({ product }) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`

  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width='100%' />
    </Box>
  )
}

ProductThumbnail.propTypes = {
  product: PropTypes.object
}

export default ProductThumbnail
