import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants'
import { formatPrice } from '../../../utils/common'

const Product = ({ product }) => {
  const history = useHistory()
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`

  const handleClick = () => {
    history.push(`/products/${product.id}`)
  }

  return (
    <Box padding={1} onClick={handleClick}>
      <Box padding={1} minHeight='215px'>
        <img src={thumbnailUrl} alt={product.name} width='100%' />
      </Box>

      <Typography variant='body2'>{product.name}</Typography>
      <Typography variant='body2'>
        <Box component='span' fontSize='16px' fontWeight='bold' mr={1}>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.object
}

export default Product
