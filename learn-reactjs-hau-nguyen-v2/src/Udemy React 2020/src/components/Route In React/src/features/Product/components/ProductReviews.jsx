import { Card, CardContent, LinearProgress, Typography, makeStyles } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2)
  },
  card: {
    marginBottom: theme.spacing(2),
    listStyle: 'none' // Remove bullet points
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  }
}))

const ProductReviews = () => {
  const classes = useStyles()
  const [reviewsData, setReviewsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const reviewsPerPage = 5 // Display 5 reviews per page

  useEffect(() => {
    const savedPage = sessionStorage.getItem('currentReviewPage')
    if (savedPage) {
      setPage(parseInt(savedPage))
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setReviewsData(data)
        setLoading(false) // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    sessionStorage.setItem('currentReviewPage', newPage)
  }

  const indexOfLastReview = page * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview)

  return (
    <div className={classes.container}>
      {loading ? (
        <LinearProgress />
      ) : (
        currentReviews.map((review) => (
          <Card key={review.id} className={classes.card}>
            <CardContent>
              <Typography variant='h5' component='h2'>
                {review.title}
              </Typography>
              <Typography variant='body2' component='div'>
                Body: {review.body}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
      <div className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(reviewsData.length / reviewsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant='outlined'
          shape='rounded'
        />
      </div>
    </div>
  )
}

export default ProductReviews
