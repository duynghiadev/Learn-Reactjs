import { Paper } from '@material-ui/core'
import DOMPurify from 'dompurify'
import PropTypes from 'prop-types'

const ProductDescription = ({ product = {} }) => {
  const safeDescription = DOMPurify.sanitize(product.description)

  return (
    <Paper elevation={0} style={{ padding: '15px' }}>
      <div
        dangerouslySetInnerHTML={{
          __html: safeDescription
        }}
      />
    </Paper>
  )
}

ProductDescription.propTypes = {
  product: PropTypes.object
}

export default ProductDescription
