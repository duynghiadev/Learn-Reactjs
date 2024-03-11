import { Box, Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@material-ui/lab'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import productApi from '../../../api/productApi.jsx'
import FilterViewer from '../components/FilterViewer.jsx'
import ProductFilters from '../components/ProductFilters.jsx'
import ProductList from '../components/ProductList.jsx'
import ProductSkeletonList from '../components/ProductSkeletonList.jsx'
import ProductSort from '../components/ProductSort.jsx'

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px'
  },

  right: {
    flex: '1 1 0'
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px'
  }
}))

function ListPage(props) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const queryParams = queryString.parse(location.search)

  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1
  })
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || `salePrice:ASC`
  }))

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters)
    })
  }, [history, filters])

  useEffect(() => {
    ;(async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters)
        setProductList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch product list:', error)
      }

      setLoading(false)
    })()
  }, [filters])

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page
    }))
  }

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue
    }))
    console.log('newSortValue:', newSortValue)
  }

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters
    }))
    console.log('newFilters:', newFilters)
  }

  const setNewFilters = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFiltersChange} />
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              <FilterViewer filters={filters} onChange={setNewFilters} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  color='primary'
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ListPage
