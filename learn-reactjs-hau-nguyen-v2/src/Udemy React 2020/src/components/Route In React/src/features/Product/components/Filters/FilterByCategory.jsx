import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import categoryApi from '../../../../api/categoryApi'

const FilterByCategory = ({ onChange }) => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const list = await categoryApi.getAll()
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name
          }))
        )
      } catch (error) {
        console.log('Failed to fetch category list:', error)
      }
    })()
  }, [])

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id)
    }
  }

  return (
    <Box>
      <Typography>Danh Mục Sản Phẩm</Typography>
      <ul>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </Box>
  )
}

FilterByCategory.propTypes = {
  onChange: PropTypes.func
}

export default FilterByCategory
