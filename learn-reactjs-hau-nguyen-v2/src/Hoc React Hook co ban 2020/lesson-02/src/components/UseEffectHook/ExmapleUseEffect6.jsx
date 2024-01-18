import { useEffect, useState } from 'react'
import queryString from 'query-string'
import Pagination from './ExampleUseEffect5'
import PostList from './ExampleUseEffect3'

function PaginationDetail() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })

  const [postList, setPostList] = useState([])

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log({ response })

        const { data, pagination } = responseJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch posts:', error.message)
      }
    }

    console.log('POST list effect')
    fetchPostList()
  }, [filters])

  useEffect(() => {
    console.log('TODO list effect')
  })

  function handlePageChange(newPage) {
    console.log('newPage:', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div>
      <h2>This is a pagination detail 🖐</h2>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  )
}

export default PaginationDetail
