import { Box, Container, Grid, LinearProgress, Paper, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { addToCart } from '../../Cart/cartSlice'
import AddToCartForm from '../components/AddToCartForm'
import ProductAdditional from '../components/ProductAdditional'
import ProductDescription from '../components/ProductDescription'
import ProductInfo from '../components/ProductInfo'
import ProductMenu from '../components/ProductMenu'
import ProductReviews from '../components/ProductReviews'
import ProductThumbnail from '../components/ProductThumbnail'
import useProductDetail from '../hooks/useProductDetail'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3)
  },

  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5)
  },

  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
  }
}))

const DetailPage = () => {
  const classes = useStyles()
  const {
    params: { productId },
    url
  } = useRouteMatch()

  const { product, loading } = useProductDetail(productId)
  const dispatch = useDispatch()

  if (loading) {
    // TODO: Make this beautiful
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    )
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity
    })
    console.log('action handleAddToCartSubmit:', action)
    dispatch(action)
  }

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>

            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  )
}

export default DetailPage
