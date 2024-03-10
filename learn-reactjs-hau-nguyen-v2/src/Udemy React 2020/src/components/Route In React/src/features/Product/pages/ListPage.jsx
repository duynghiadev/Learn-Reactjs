import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useEffect, useState } from 'react'
import productApi from '../../../api/productApi.jsx'
import ProductSkeletonList from '../components/ProductSkeletonList.jsx'

const useStyles = makeStyles(theme => ({
  root: {},

  left: {
    width: '250px'
  },

  right: {
    flex: '1 1 auto'
  }
}))

function ListPage(props) {
  const classes = useStyles()
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 })
        setProductList(data)
      } catch (error) {
        console.log('Failed to fetch product list:', error)
      }

      setLoading(false)
    })()
  }, [])

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              Left column
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList /> : <Typography>Product List</Typography>}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ListPage
