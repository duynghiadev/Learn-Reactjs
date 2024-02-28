import { useEffect, useState } from 'react'
import queryString from 'query-string'
import PostList from './PostList'
import Pagination from '../Pagination/Pagination'
import PostFiltersForm from '../PostFilter/PostFilterForm'

const PostAll = () => {
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })

  const handlePageChange = (newPage) => {
    console.log('newPage:', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  useEffect(() => {
    async function fetchPostList() {
      // fetch data from api
      try {
        // _limit=10&_page=1
        const paramString = queryString.stringify(filters)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()

        const { data, pagination } = responseJSON
        setPostList(data)
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list:', error.message)
      }
    }

    fetchPostList()
  }, [filters])

  const handleFiltersChange = (newFilters) => {
    console.log('New Filter:', newFilters)
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  return (
    <div>
      <h2>React Hooks - PostList</h2>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  )
}

export default PostAll
