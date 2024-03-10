import { Box, Typography, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import categoryApi from '../../../../api/categoryApi'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .25s',

      '&:hover': {
        color: theme.palette.primary.dark,
        cursor: 'pointer'
      }
    }
  }
}))

const FilterByCategory = ({ onChange }) => {
  const [categoryList, setCategoryList] = useState([])
  const classes = useStyles()

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
    <Box className={classes.root}>
      <Typography variant='subtitle2'>Danh Mục Sản Phẩm</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant='body2'>{category.name}</Typography>
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
