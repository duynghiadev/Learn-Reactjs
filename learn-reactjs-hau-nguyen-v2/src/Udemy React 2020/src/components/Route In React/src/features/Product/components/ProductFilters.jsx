import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByService from './Filters/FilterByService'

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return

    const newFilters = {
      'category.id': newCategoryId
    }
    onChange(newFilters)
  }

  const handleChange = (values) => {
    console.log(values)
    if (onChange) onChange(values)
  }

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  )
}

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default ProductFilters
