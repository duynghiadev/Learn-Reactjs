import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return

    const newFilters = {
      'category.id': newCategoryId
    }
    onChange(newFilters)
  }

  const handleByChange = (values) => {
    console.log(values)
    if (onChange) onChange(values)
  }

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleByChange} />
    </Box>
  )
}

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default ProductFilters
