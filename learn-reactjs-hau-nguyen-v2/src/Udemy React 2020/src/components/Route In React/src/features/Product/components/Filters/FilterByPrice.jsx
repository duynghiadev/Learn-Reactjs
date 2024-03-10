import { Box, Button, TextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useState } from 'react'

const FilterByPrice = ({ onChange }) => {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log(values)
    if (onChange) onChange(values)

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0
    })
  }

  return (
    <Box>
      <Typography variant='subtitle2'>GIÁ</Typography>

      <Box>
        <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant='outlined' color='primary' onClick={handleSubmit}>
        Áp Dụng
      </Button>
    </Box>
  )
}

FilterByPrice.propTypes = {
  onChange: PropTypes.func
}

export default FilterByPrice
