import { Card, CardContent, LinearProgress, Typography, makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2)
  },
  card: {
    marginBottom: theme.spacing(2),
    listStyle: 'none' // Added listStyle to remove bullet points
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  }
}))

const ProductAdditional = () => {
  const classes = useStyles()
  const [additionalData, setAdditionalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const productsPerPage = 3 // Changed to 3 products per page

  useEffect(() => {
    const savedPage = sessionStorage.getItem('currentPage')
    if (savedPage) {
      setPage(parseInt(savedPage))
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.ezfrontend.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setAdditionalData(data)
        setLoading(false) // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    sessionStorage.setItem('currentPage', newPage)
  }

  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = additionalData.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className={classes.container}>
      {loading ? (
        <LinearProgress />
      ) : (
        currentProducts.map((product) => (
          <Card key={product.id} className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                {product.name}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Price: {product.originalPrice}
              </Typography>
              <Typography variant='body2' component='div'>
                Description:{' '}
                <div
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
                />
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
      <div className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(additionalData.length / productsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant='outlined'
          shape='rounded'
        />
      </div>
    </div>
  )
}

export default ProductAdditional
