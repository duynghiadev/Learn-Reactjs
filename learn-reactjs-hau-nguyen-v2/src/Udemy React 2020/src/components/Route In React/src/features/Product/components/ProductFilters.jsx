import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return

    const newFilters = {
      ...filters,
      'category.id': newCategoryId
    }
    onChange(newFilters)
  }

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  )
}

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default ProductFilters
